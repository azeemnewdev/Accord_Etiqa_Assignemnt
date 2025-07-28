import { useRepoStore } from '@/store/useRepoStore';
import { formatNumberWithK } from '@/utilities/format-number';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useLayoutEffect } from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';

const RepoDetails = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const repos = useRepoStore((state) => state.repos);

  const selectedRepo = repos.find(x => x.id.toString() === id);

  useLayoutEffect(() => {
    navigation.setOptions({ title: selectedRepo?.name });
  }, [navigation]);

  return (
    <View className='flex p-2 m-5 bg-white rounded'>
      <View className='items-center justify-center py-10'>
        <Image src={selectedRepo?.owner.avatar_url} className='rounded-full' width={200} height={200} />
        <Text className='font-bold text-3xl pt-5'>
          {selectedRepo?.owner.login}
        </Text>
      </View>

      <View>
        <View className='flex flex-row pb-5'>
          <Text className='font-bold'>Repository Fullname</Text>
          <Text className='ml-2'>{selectedRepo?.full_name}</Text>
        </View>
        
        <View className='flex-row space-x-2 pb-5'>
          <Text className='font-bold'>Description</Text>
          <Text numberOfLines={3} className='flex-shrink ml-2 text-start'>{selectedRepo?.description}</Text>
        </View>

        <View className='flex-row space-x-2 pb-5'>
          <Text className='font-bold'>Stars</Text>
          <View className='flex flex-row ml-2'>
              <Ionicons name="star" size={16} color="black" />
              <Text style={{ marginLeft: 4 }}>{formatNumberWithK(selectedRepo!.stargazers_count)}</Text>
          </View>
        </View>

        <View className='flex-row space-x-2 pb-5'>
          <Text className='font-bold'>Github Link</Text>
          <View className='flex flex-row ml-2'>
            <TouchableOpacity onPress={() => Linking.openURL(selectedRepo!.html_url)}>
              <Text className="text-blue-500 underline">Open in GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    </View>
  )
}

export default RepoDetails
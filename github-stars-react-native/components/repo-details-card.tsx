import { GitHubRepo } from '@/models/github-repo.model'
import { formatNumberWithK } from '@/utilities/format-number'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const RepoDetailsCard = ({ item }: { item: GitHubRepo }) => {
  return (
    <Link href={`/repo/${item.id}`} asChild>
      <TouchableOpacity className='mb-2 bg-gray-100 rounded'>
        <View className='m-5'>
          <View className='p-1'>
              <Text className='font-bold pb-3'>{item.name}</Text>
              <Text>{item.description}</Text>
          </View>
          <View className='flex flex-row justify-between items-center mt-5'>
              <View className='flex flex-row items-center justify-center'>
                  <Image src={item.owner.avatar_url} height={30} width={30} className='rounded-full' />
                  <Text style={{ marginLeft: 4 }}>{item.owner.login}</Text>
              </View>
              <View className='flex flex-row'>
                  <Ionicons name="star" size={16} color="black" />
                  <Text style={{ marginLeft: 4 }}>{formatNumberWithK(item.stargazers_count)}</Text>
              </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

export default RepoDetailsCard
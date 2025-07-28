import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';

import RepoDetailsCard from '@/components/repo-details-card';
import useRepos from '@/hooks/useRepos';
import { useCallback, useState } from 'react';

export default function HomeScreen() {
  const { repos, loading, error, loadRepos } = useRepos();
  const [refreshing, setRefreshing] = useState(false);

  const loadMore = async () => {
    loadRepos(refreshing);
  }
  
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadRepos(refreshing);
    setRefreshing(false);
  }, []);

  return (
    <View className='px-2 bg-white h-full'>
      {error ? <>
        <View className='items-center justify-center h-full'>
          <Text className='color-red-700'>
            {error}
          </Text>
        </View>
      </> :
        <FlatList
          data={refreshing ? [] : repos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={RepoDetailsCard}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          onEndReached={loadMore}
          onEndReachedThreshold={1}
          ListFooterComponent={loading ? <ActivityIndicator size="small" /> : null}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  
});

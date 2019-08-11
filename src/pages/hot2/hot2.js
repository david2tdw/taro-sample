// import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { useStore } from '../../store/index'
import { Hot2Store, useAsyncEffect } from '../../store/hot2-store'
import { ThreadList } from '../../components/thread-list/thread-list'

function Hot2 () {
  // const [ loading, setLoading] = useState(true)
  // const [ threads, setThreads ] = useState([])

  const { loading, threads } = useStore(Hot2Store)
  useAsyncEffect()

  return (
    <View className='index'>
      <ThreadList
        threads={threads}
        loading={loading}
      />
    </View>
  )
}

export default Hot2

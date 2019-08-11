import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { useStore, HotStore, fetchHot, test } from '../../store/hot-store'

function Hot () {
  const [ loading, setLoading] = useState(true)
  const [ threads, setThreads ] = useState([])

  const { todos } = useStore(HotStore)
  // useEffect(async () => {
  //   try {
  //     const res = await Taro.request({
  //       url: 'https://www.v2ex.com/api/nodes/all.json'
  //     })
  //     setLoading(false)
  //     console.log(res.data)
  //   } catch (error) {
  //     Taro.showToast({
  //       title: '载入远程数据错误'
  //     })
  //   }
  // }, [])
  test()
  return (
    <View>
      {todos.map((todo, index) => <View key={index}> {todo}</View>)}
    </View>
  )
}

export default Hot

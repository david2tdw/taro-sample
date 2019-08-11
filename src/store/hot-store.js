import { Store } from 'laco'
import { useState, useEffect } from '@tarojs/taro'
import { fetchHotList } from '../services/hot-service'
import Taro from '@tarojs/taro'

export function useStore (store) {
  const [ state, setState ] = useState(store.get())

  function updateState () {
    setState(store.get())
  }

  useEffect(() => {
    store.subscribe(updateState)
    return () => store.unsubscribe(updateState)
  })
  return state
}

export const HotStore = new Store({
  todos: [1, 2]
}, 'HotStore')

// async function fetchHot () {
//   // fetchHotList().then(res => {
//   //   console.log(res)
//   // })
//   const res = await fetchHotList()
//   console.log(res)
// }

// export function test () {
//   useEffect(() => {
//     const res =  fetchHotList()
//     console.log(res.data)
//     // const res =  fetchHotList()
//     // res.then(aa => {
//     //   console.log(aa)
//     // })
    
//   }, [])
// }

export function test () {
  console.log('hot-store test effect1.')
  useEffect(async () => {
    const res = await fetchHotList()
    console.log(res)
  }, [])
}

// export function test () {
//   useEffect(async () => {
//     try {
//       const res = await Taro.request({
//         url: 'https://www.v2ex.com/api/nodes/all.json'
//       })
//       setLoading(false)
//       console.log(res.data)
//     } catch (error) {
//       Taro.showToast({
//         title: '载入远程数据错误'
//       })
//     }
//   }, [])
// }

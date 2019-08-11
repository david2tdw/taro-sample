import { Store } from 'laco'
import { useState, useEffect } from '@tarojs/taro'
import { fetchHotList } from '../services/hot-service'
import Taro from '@tarojs/taro'



export const Hot2Store = new Store({
  loading: true,
  threads: []
}, 'HotStore')

// 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。
export function useAsyncEffect () {
  useEffect(async () => {
    console.log('Hot2Store useAsyncEffect')
    const res = await fetchHotList()
    // const res = [1,2,3,4]
    console.log(res)
    Hot2Store.set(() => ({
      loading: false,
      threads: res
    }), 'fetchHotList')
  }, [])
}

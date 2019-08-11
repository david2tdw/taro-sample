import { Store } from 'laco'
import { useState, useEffect } from '@tarojs/taro'
// import { useState, useEffect } from '@tarojs/taro'

export const LatestStore = new Store({
  list: []
},
'LatestStore'
)

export const fetchList = () => {
  const list = LatestStore.get().list
  console.log('2')
  LatestStore.set(() => {
    list.push(...[1, 2, 3])
  }, 'fetchList')
}

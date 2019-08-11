import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class ThreadList extends Component {
  static defaultProps = {
    threads: [],
    loading: true
  }

  render () {
    const { loading, threads } = this.props

    if (loading) {
      console.log('loading')
    }

    const element = threads.map(thread => {
      return (
        <View>
          thread
        </View>
      )
    })

    return (
      <View className="thread-list">
        { element }
      </View>
    )
  }
}

export { ThreadList }

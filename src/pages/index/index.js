import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Header from '../../components/header/header'
import MainSection from '../../components/main-section/main-section'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  // componentWillMount () { }

  // componentDidMount () { }

  // componentWillUnmount () { }

  // componentDidShow () { }

  // componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {/* <Text>Hello world!</Text> */}
        <Header />
        <MainSection />
      </View>
    )
  }
}

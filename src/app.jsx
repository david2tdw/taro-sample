import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/latest/latest', // 首页
      'pages/index/index',
      'pages/hot/hot',
      'pages/hot2/hot2'
    ],
    tabBar: {
      list: [{
        'iconPath': './images/shouye@2x.png',
        'selectedIconPath': './images/shouye_active@2x.png',
        'pagePath': 'pages/latest/latest',
        'text': '首页'
      }, {
        'iconPath': './images/kehu@2x.png',
        'selectedIconPath': './images/kehu_active@2x.png',
        'pagePath': 'pages/hot/hot',
        'text': '热门'
      },{
        'iconPath': './images/kehu@2x.png',
        'selectedIconPath': './images/kehu_active@2x.png',
        'pagePath': 'pages/hot2/hot2',
        'text': '热门1'
      }, {
        'iconPath': './images/huiyuan@2x.png',
        'selectedIconPath': './images/huiyuan_active@2x.png',
        'pagePath': 'pages/hot/hot',
        'text': '会员中心'
      }],
      'color': '#000',
      // 'selectedColor': '#56abe4',
      'backgroundColor': '#fff',
      'borderStyle': 'white'
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#102A4D',
      navigationBarTitleText: 'Mini Trend',
      navigationBarTextStyle: 'white'
    }
    // subPackages: [{
    // }]
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

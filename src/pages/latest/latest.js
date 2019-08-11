import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { useStore } from '../../store/index'
import { LatestStore, fetchList } from '../../store/latest-store'
import './latest.scss'

export default class Latest extends Taro.Component {
  config = {
    navigationBarTitleText: '最新'
  }
  constructor (props) {
    super(props)
    this.state = {
      infoList: [],
      date: new Date(),
      isToggleOn: true,
      num: 0
    }
  }
  // 如果你不在 render() 中使用某些东西，它就不应该在状态中
  componentDidMount () {
    console.log('111')
    fetchList()
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000);
  }
  tick () {
    this.setState({
      date: new Date()
    })
  }
  onClickBtn (e) {
    e.stopPropagation()
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
    console.log(this.state.isToggleOn)
  }
  onClickParamBtn (isToggleOn, step, e) {
    console.log(isToggleOn)
    this.state.num = (this.state.num + step)
  }
  componentWillUnmount () {
    clearInterval(this.timerId)
  }

  render () {
    const { list } = useStore(LatestStore)
    // this.setState(() => {

    // })

    return (
      <View>
        <View>
          {list.map((item, index) => <View key={index}>{item}</View>)}
        </View>
        <View>
          <Text>Hello, world!</Text>
          <Text>now time is: {this.state.date.toLocaleTimeString()}</Text>
          <Button onClick={this.onClickBtn}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </Button>
          <Button onClick={this.onClickParamBtn.bind(this, this.state.isToggleOn, 3)}>
            {this.state.num}
          </Button>
        </View>
      </View>
    )
  }
}
//导入react和react中的component组件 (类)
import React, {
	Component
} from 'react';
//导入根组件的样式
import './App.css';
//导入要使用的组件
import { Button, Icon } from "antd"
import { Menu, Dropdown } from 'antd';
import { Switch as Sw } from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';

//extends  es6中的继承关键字
//App组件  (组件的实质是 组件类)
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			provinces: ["北京", "山西省", "河南省", "陕西省"],
			provinceActive: '选择省份',
            seen:true
		}
		// this.Seen = this.Seen.bind(this)
	}
    // Seen(){
	 //  this.setState({
    //       seen:!this.state.seen
    //   })
    // }
	//组件类中都有一个render方法
	render() {
		var that = this

		function handleButtonClick(e) {
			// message.info('Click on left button.');
			console.log('click left button', e);
		}

		function handleMenuClick(e) {
			//message.info('Click on menu item.');
			// console.log('click', e);
			console.log(that.state.provinces[e.key])
			that.setState({
				provinceActive: that.state.provinces[e.key]
			})
		}
		//render函数返回的就是组件的模板
		const menu = (
			<Menu onClick={handleMenuClick}>
            {this.state.provinces.map((ele,index)=>{
             return <Menu.Item key={index} style={{ width: 115 }}>{ele}</Menu.Item>
          })
            }

          </Menu>
		);
		return(
			<div className="App">
        {/*1.按钮*/}
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed" size="large">Dashed</Button>
        <Button type="danger" onClick={
            ()=>{
              console.log("危险，快跑！！！")
            }
        }>Danger</Button>
        {/*2.图标*/}
        <div>
          <Button type="primary"><Icon type="link"/>链接</Button>
          {/*<Icon type="loading"/>*/}
          <Icon type="dribbble" spin={true} style={{ fontSize: 50, color: '#08c' }} />
        </div>
        {/*3.下拉菜单*/}
        <div>
          <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
              {this.state.provinceActive}
          </Dropdown.Button>
        </div>
        {/*4.开关*/}
         <div>
           {/*<Sw checkedChildren="开" unCheckedChildren="关" defaultChecked onChange={this.Seen}/>*/}
           <Sw checkedChildren="开" unCheckedChildren="关" defaultChecked onChange={
             (value)=>{
             this.setState({
                 seen:value
             })
           }}/>
             {
               this.state.seen ? <span>灯亮了</span> : <span>灯灭了</span>
             }
         </div>
         {/*5.时间*/}
         <div>
             <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
             <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
             <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
         </div>
      </div>
		);
	}
}

export default App;
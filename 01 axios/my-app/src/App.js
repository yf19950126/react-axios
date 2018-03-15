//导入react和react中的component组件 (类)
import React, {
	Component
} from 'react';
//导入根组件的样式
import './App.css';
//导入axios
import axios from "axios"
//qs 是用来转化参数的
var qs = require("qs")

//extends  es6中的继承关键字
//App组件  (组件的实质是 组件类)
class App extends Component {
	constructor(props) {
		super(props);
		//数据
		this.state = {
			students: []
		}
	}
	//组件类中都有一个render方法
	render() {
		return(
			<div className="App">

      </div>
		);
	}
	//组件挂载之前
	componentWillMount() {
		//接口
		//请求方式:get
		//地址:http://192.168.52.179:4000/api/students
		//查询字符串参数   起到搜索作用: name  isMale  phone
		let url = "http://192.168.52.179:4000/api/students"
		let filters = {
			name: '杨'
		}
		//axios.get  返回值是一个promise对象
		axios.get(url, {
				params: filters
			})
			.then(res => {
				//console.log(res)
			}).catch(err => {
				console.log(err)
			})
	}
	//组件挂载完成
	componentDidMount() {
		//添加学生接口
		//请求方式:post
		//地址:http://192.168.52.179:4000/api/add
		//查询字符串参数   起到搜索作用: name  isMale  phone
		//请求体
		var data = {
			"isMale": true,
			"name": "德玛西亚",
			"age": 19,
			"phone": '15622223333',
			"email": '195656232@qq.com'
		}
		let url = "http://192.168.52.179:4000/api/add";
		//坑点:data对象不能直接填  需要转化
        // var data = new URLSearchParams(data)
        var data = qs.stringify(data)
		axios.post(url, data)
			.then((res) => {
				console.log(res)
			}).catch((err) => {
				console.log(err)
			})
	}
}

export default App;
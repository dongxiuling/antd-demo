import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios';

class Student extends Component {
    constructor(params) {
        super(params);
        this.state = {
            dataSource:[]
        }
    }
    componentWillMount() {
        axios.get('https://easy-mock.com/mock/5ce94187843fd568acd104c2/example/student')
        .then((res)=>{
            this.setState({
                dataSource:res.data.data.projects
            })
        })
    }
    
    render() {
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: '邮箱',
                dataIndex: 'email',
                key: 'email',
              },
              {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
              },{
                title: '学号',
                dataIndex: 'id',
                key: 'id',
              },
              ,{
                title: '学校',
                dataIndex: 'school',
                key: 'school',
              }
        ]
        // const dataSource = [
        //     {
        //       key: '1',
        //       name: '胡彦斌',
        //       age: 32,
        //       address: '西湖区湖底公园1号',
        //     },
        //     {
        //       key: '2',
        //       name: '胡彦祖',
        //       age: 42,
        //       address: '西湖区湖底公园1号',
        //     },
        //   ];
        return (
            <div style={{background:"#fff"}}>
                <Table columns={columns}  dataSource={this.state.dataSource}></Table>
            </div>
        );
    }
}

export default Student;

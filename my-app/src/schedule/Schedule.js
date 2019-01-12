import React, { Component } from 'react';
import { Table, Input, Button, Icon, Divider, Tag } from 'antd'
import './schedule.css';
import 'antd/dist/antd.css';
import scheduleLogo from "./schedule.png";
let title = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
let data1 = {
	row1: [{
		key: '1',
		monday: {
			course: "BOXING skills&drills",
			type: "boxing",
			isBeginner: true,
			isIntermedate: true,
			isAdvanced: false,
			isWoman: false
		},
		tuesday: {
			course: "BOXING skills&drills",
			type: "boxing",
			isBeginner: true,
			isIntermedate: true,
			isAdvanced: false,
			isWoman: false
		}
	}, {
		time: '7:00 - 8:00',
		type: "BOXING",
		person: "Michael"
	}, {
		time: '7:00 - 8:00',
		type: "BOXING",
		person: "Michael"
	}, {
		time: '7:00 - 8:00',
		type: "BOXING",
		person: "Michael"
	}, {
		time: '7:00 - 8:00',
		type: "BOXING",
		person: "Michael"
	}, {
		time: '7:00 - 8:00',
		type: "BOXING",
		person: "Michael"
	}, {
		time: '7:00 - 8:00',
		type: "BOXING",
		person: "Michael"
	}]
}

const data = [{
  key: '1',
  monday: 'John Brown',
  tuesday: 32,
	wendnesday: '3',
	thursday: '2',
	friday: '5',
	saturday: '6',
	sunday: 'y'
}, {
  key: '1',
  monday: 'John Brown',
  tuesday: 32,
	wendnesday: '3',
	thursday: '2',
	friday: '5',
	saturday: '6',
	sunday: 'y'
}, {
  key: '1',
  monday: 'John Brown',
  tuesday: 32,
	wendnesday: '3',
	thursday: '2',
	friday: '5',
	saturday: '6',
	sunday: 'y'
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park',
}, {
  key: '1',
  monday: 'John Brown',
  tuesday: 32,
	wendnesday: '3',
	thursday: '2',
	friday: '5',
	saturday: '6',
	sunday: 'y'
}, {
  key: '1',
  monday: 'John Brown',
  tuesday: 32,
	wendnesday: '3',
	thursday: '2',
	friday: '5',
	saturday: '6',
	sunday: 'y'
}, {
  key: '1',
  monday: 'John Brown',
  tuesday: 32,
	wendnesday: '3',
	thursday: '2',
	friday: '5',
	saturday: '6',
	sunday: 'y'
}];

class Schedule extends Component {
  constructor(props){
		super(...props);
		this.state = {
      searchText: ''
    };
	}
	
	handleSearch = (selectedKeys, confirm) => () => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  }

  handleReset = clearFilters => () => {
    clearFilters();
    this.setState({ searchText: '' });
	}
	
  render() {
    // return (
    //   <div className="schedule content">
    //     <img src={scheduleLogo} style={{height: 400}}/>
  	// 	<div ref="wrapper" className="scheduleWrapper">
    //   		<ul style={{height: '100%'}}>
    //   			{
    //   				title.map( (item, index) => {
    //   					 return <li className={index == 0 ? "firstLi" : index == 6 ? "lastLi" : ''}>
    //   					 		<div className="title">{item}</div>
    //   						</li>
    //   				})
    //   			}
    //   		</ul>
  	// 	</div>
    //   </div>
		// );
		const columns = [{
      title: 'MONDAY',
      dataIndex: 'monday',
      key: '1',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div className="custom-filter-dropdown">
          <Input
            ref={ele => this.searchInput = ele}
            placeholder="Search name"
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={this.handleSearch(selectedKeys, confirm)}
          />
          <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)}>Search</Button>
          <Button onClick={this.handleReset(clearFilters)}>Reset</Button>
        </div>
      ),
      filterIcon: filtered => <Icon type="smile-o" style={{ color: filtered ? '#108ee9' : '#aaa' }} />,
      onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => {
            this.searchInput.focus();
          });
        }
      },
      render: (text) => {
        const { searchText } = this.state;
        return searchText ? (
          <span>
            {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
              fragment.toLowerCase() === searchText.toLowerCase()
                ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
            ))}
          </span>
        ) : text;
      },
    }, {
      title: 'TUESDAY',
      dataIndex: 'tuesday',
      key: '2',
    }, {
      title: 'WEDNESDAY',
      dataIndex: 'wednesday',
      key: '3',
      filters: [{
        text: 'London',
        value: 'London',
      }, {
        text: 'New York',
        value: 'New York',
      }],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    }, {
      title: 'THURSDAY',
      dataIndex: 'thursday',
      key: '4',
      filters: [{
        text: 'London',
        value: 'London',
      }, {
        text: 'New York',
        value: 'New York',
      }],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    }, {
      title: 'FRIDAY',
      dataIndex: 'friday',
      key: '5',
      filters: [{
        text: 'London',
        value: 'London',
      }, {
        text: 'New York',
        value: 'New York',
      }],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    }, {
      title: 'SATURDAY',
      dataIndex: 'saturday',
      key: '6',
      filters: [{
        text: 'London',
        value: 'London',
      }, {
        text: 'New York',
        value: 'New York',
      }],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    }, {
      title: 'SUNDAY',
      dataIndex: 'sunday',
      key: '7',
      filters: [{
        text: 'London',
        value: 'London',
      }, {
        text: 'New York',
        value: 'New York',
      }],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    }];
    return <Table columns={columns} dataSource={data} />;
  }

}

export default Schedule;
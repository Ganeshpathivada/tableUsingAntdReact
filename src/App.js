import 'antd/dist/antd.css';
import { Table} from 'antd';
import data from './components/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function  App() {
//  const  pagination = {
//     current: 1,
//     pageSize: 10,
//   };

//   const array1 = [];
// for (let i = 0; i < 50; i++) {
//   array1.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: i+11,
//     address: `London, Park Lane no. ${i}`,
//   });
//   i+=1;
// }
// const array2 = [];
// for (let i = 1; i < 50; i++) {
//   array2.push({
//     key: i,
//     name: `king Kong ${i}`,
//     age: i+11,
//     address: `french, Park Lane no. ${i}`,
//   });
//   i++;
// }
// const data = array1.concat(array2);
 


  const columns=[
    {
      title:'name',
      dataIndex:'name',
      key:'id'
    },
    {
      title:'email',
      dataIndex:'email',
      key:'id'
    },
    {
      title:'gender',
      dataIndex:'gender',
      key:'id',
      filters: [
        {
          text: 'Male',
          value: 'Male',
        },
        {
          text: 'Female',
          value: 'Female',
        },
        
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.gender.indexOf(value)===0 ,
    },
    {
      title:'age',
      dataIndex:'age',
      key:'id',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title:'phone',
      dataIndex:'phone',
      key:'id'
    },
    {
      title:'address',
      dataIndex:'address',
      key:'id',
      filters: [
        {
          text: 'new york',
          value: 'new york',
        },
        {
          text: 'landon',
          value: 'landon',
        },
        {
          text: 'france',
          value: 'france',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value)===0 ,
    }
  ]
  return (
    <div className="App">
    <header className="container mt-5">
    <h2 className="text-center text-white mb-4">Table Using Antd</h2>
    <Table className=""
    dataSource ={data}
    columns={columns}
    pagination={{ pageSize: 5 }}
    >
    </Table>
    </header>
  </div>
  );
}
export default App;
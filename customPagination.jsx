import { use, useState } from "react";
import AppLayout from "../components/layout";
import AppTable from "../components/Table";

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Tyler Lockwood',
    age: 32,
    address: 'auntralia No. 1 Lake Park',
    tags: ['egoistic', 'moody'],
  },
  {
    key: '5',
    name: 'Carol Alen',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '6',
    name: 'Elena Gilbert',
    age: 22,
    address: 'England No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }, {
    key: '7',
    name: 'Stefan Salvatore',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }, {
    key: '8',
    name: 'Bonnie Bennet',
    age: 28,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }, {
    key: '9',
    name: 'Damon Salvatore',
    age: 35,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }, {
    key: '10',
    name: 'Matt Donovan',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const LmsUsers = () => {
  const [page, setCurrentPage] = useState(0);
  const paginationArray = () => {
    let finalArr = [];
    let pageSize = 2;
    for (let i = 0; i < data.length; i += pageSize) {
      finalArr.push(data.slice(i, i + pageSize));
    }
    console.log(finalArr);
    return finalArr;
  }
  paginationArray();

  return (
    <AppLayout>
      <h1>USERS HERE</h1>
      <AppTable data={paginationArray()[page]} />
      <div>
        {paginationArray().map((_, i) => (
          <button key={i} onClick={() => setCurrentPage(i)}>
            {i + 1}
          </button>
        ))}
      </div>

    </AppLayout>
  )
}

export default LmsUsers;


import React, { useState } from 'react';
import AppLayout from "../components/layout";
import AppTable from "../components/Table";
import { Pagination } from 'antd';

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
    address: 'Australia No. 1 Lake Park',
    tags: ['egoistic', 'moody'],
  },
  {
    key: '5',
    name: 'Carol Alen',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const LmsUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2; // Number of items to show on each page

  const currentData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page); // Update the current page when the user changes it
  };

  return (
    <AppLayout>
      <h1>USERS HERE</h1>
      <AppTable data={currentData} />
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        <Pagination
          current={currentPage} 
          pageSize={pageSize}
          total={data.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </AppLayout>
  );
};

export default LmsUsers;

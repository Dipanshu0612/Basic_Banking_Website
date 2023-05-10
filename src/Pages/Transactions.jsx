import { collection, getDocs } from 'firebase/firestore'
import db from '../firebase'
import { Table } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { FaRupeeSign } from 'react-icons/fa'
import { AiOutlineLeft } from 'react-icons/ai'
import { NavLink as Link } from 'react-router-dom';


export default function TransactionsData() {
  const [transaction_data, settransactiontdata] = useState([])
  const transactiondbref = collection(db, 'Transaction_Details')

  useEffect(() => {
    let getCustomers = async () => {
      let data = await getDocs(transactiondbref);
      settransactiontdata(data.docs.map((doc => ({ ...doc.data(), id: doc.id }))))
    }

    getCustomers();
  }, [])
  return (
    <>
      <div>
        <h2 className='text-center text-3xl font-bold my-3'>List of Transactions</h2>
      </div>

      <div className="px-4 py-4">
        <Table striped bordered hover responsive='md' variant="dark" className="cursor-pointer text-center">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Sender's Name</th>
              <th>Reciever's Name</th>
              <th>Amount (<FaRupeeSign className='inline' />)</th>
            </tr>
          </thead>

          <tbody>
            {transaction_data.map((rowdata, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{rowdata.Sender}</td>
                  <td>{rowdata.Reciever}</td>
                  <td>{rowdata.Amount}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>

        <div className='flex justify-center items-center flex-wrap space-x-5 my-2 mb-5 text-black sm:flex-col'>
        <button className='bg-blue-500 px-3 py-2 flex rounded justify-center items-center space-x-1 font-medium hover:border border-black ease-in-out duration-200 hover:text-black'><Link to="/customer-list" className="hover:text-black"> <AiOutlineLeft className='text-xl rounded inline-flex' id='transactionslogo' />Back to Customers List</Link></button>
        </div>

      </div>
    </>
  )
}

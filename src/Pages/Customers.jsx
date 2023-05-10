import React from 'react'
import { useState, useEffect } from 'react'
import db from '../firebase'
import { collection, getDocs,getDoc,doc } from 'firebase/firestore'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink as Link } from 'react-router-dom';
import { FcMoneyTransfer } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";
import { FaRupeeSign } from "react-icons/fa";
import SendMoney from '../components/sendMoney'



export default function Customers(props) {

    const [viewdata, setviewdata] = useState({
        name:"",
        email:"",
        mobno:"",
        balance:"",
        accid:""
    })
    let {name, mobno, email,balance,accid}=viewdata;
    async function printName(id) {
        const docRef = doc(db, "Customers_Data", id);
        const snapshot = await getDoc(docRef);
        setviewdata({
            name:snapshot.data().Name,
            email:snapshot.data().Email,
            mobno:snapshot.data().Mobile_No,
            balance:snapshot.data().Balance,
            accid:id
        });
    }
    const [modalShow, setModalShow] = React.useState(false);
    const [custdata, setcustdata] = useState([])
    const custdbref = collection(db, 'Customers_Data')

    useEffect(() => {
        let getCustomers = async () => {
            let data = await getDocs(custdbref);
            setcustdata(data.docs.map((doc => ({ ...doc.data(), id: doc.id }))))
        }

        getCustomers();
    }, [])

    return (
        <>
            <div className='ViewCustomer'>
                <Modal show={modalShow} className='z-100'
                    onHide={() => setModalShow(false)}
                    {...props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='space-y-2'>
                        <h4 className='font-bold'>Account ID: <span className='font-semibold'>{accid}</span></h4>
                        <h4 className='font-bold'>Email : <span className='font-semibold'>{email}</span></h4>
                        <h4 className='font-bold'>Mobile Number: <span className='font-semibold'>{mobno}</span></h4>
                        <h4 className='font-bold'>Balance : <span className='font-semibold'>Rs. {balance}</span></h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='bg-green-600 hover:bg-green-800' onClick={()=><SendMoney />}>Send Money</Button>
                        <Button onClick={() => setModalShow(false)} className='bg-blue-600 hover:bg-blue-500'>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div>
                <h2 className='text-center text-3xl font-bold my-3'>Customer List of Bank of Sparks</h2>
            </div>

            <div className="px-4 py-4">
                <Table striped bordered hover responsive='md' variant="dark" className="cursor-pointer text-center">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Account Balance (<FaRupeeSign className='inline' />)</th>
                        </tr>
                    </thead>

                    <tbody>
                        {custdata.map((rowdata, index) => {
                            return (
                                <tr onClick={() => {
                                    setModalShow(true);
                                    printName(rowdata.id)
                                }
                                }>
                                    <td>{index + 1}</td>
                                    <td>{rowdata.Name}</td>
                                    <td>{rowdata.Balance}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>


            </div>

            <div className='flex justify-center items-center flex-wrap space-x-5 my-2 mb-5 text-black sm:flex-col'>
                <button className='bg-green-500 px-3 py-2 flex rounded justify-center items-center space-x-1 font-medium hover:border border-black ease-in-out duration-200'><FcMoneyTransfer className='text-xl' id='transactionslogo' />Send Money</button>
                <button className='bg-blue-500 px-3 py-2 flex rounded justify-center items-center space-x-1 font-medium hover:border border-black ease-in-out duration-200 hover:text-black'><Link to="/transaction-history" className="hover:text-black"> <GrTransaction className='text-xl rounded inline-flex' id='transactionslogo' />See all Transactions</Link></button>
            </div>
        </>
    )
}



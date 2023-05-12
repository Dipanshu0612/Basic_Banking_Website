import React from 'react'
import { useState, useEffect } from 'react'
import db from '../firebase'
import { collection, getDocs, getDoc, doc, updateDoc, addDoc } from 'firebase/firestore'
import { Form, Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink as Link } from 'react-router-dom';
import { FcMoneyTransfer } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";
import { FaRupeeSign } from "react-icons/fa";
import { toast } from 'react-toastify'


export default function Customers(props) {
    let [formData, setFormData] = useState({
        sender1: "",
        amount1: 0
    })
    let [formData2, setFormData2] = useState({
        sender2: "",
        reciever2:"",
        amount2: 0
    })
    let { sender1, amount1 } = formData;
    let { sender2,reciever2,amount2 } = formData2;
    const [modalShow, setModalShow] = useState(false);
    const [custdata, setcustdata] = useState([])
    const custdbref = collection(db, 'Customers_Data')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let transaction_ref=collection(db,"Transaction_Details");
    const [secondmodal, setsecondShow] = useState(false);
    const secondhandleClose = () => setsecondShow(false);
    const secondhandleShow = () => setsecondShow(true);

    function onChanged1(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }
    function onChanged2(e) {
        setFormData2((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }

    
    const [viewdata, setviewdata] = useState({
        name: "",
        email: "",
        mobno: "",
        balance: "",
        accid: ""
    })
    
    let { name, mobno, email, balance, accid } = viewdata;
    let reciever1 = email;
    
    async function printName(id) {
        const docRef = doc(db, "Customers_Data", id);
        const snapshot = await getDoc(docRef);
        setviewdata({
            name: snapshot.data().Name,
            email: snapshot.data().Email,
            mobno: snapshot.data().Mobile_No,
            balance: snapshot.data().Balance,
            accid: id
        });
    }
    
    
    async function onSubmit(e) {
        try {
            let sendid,recid,sendbalance,recbalance,sendname,recname;
            custdata.forEach((data)=>{
                // console.log(data);
                if (data.Email === sender1){
                    sendid=data.id;
                    sendbalance=data.Balance;
                    sendname=data.Name;
                }
                if (data.Email === reciever1){
                    recid=data.id;
                    recbalance=data.Balance;
                    recname=data.Name;
                }
                console.log(sendid,sendbalance,recid,recbalance," ",amount1);

            })
            if (sendbalance < amount1){
                toast.error("Sender's account has insufficient Balance!")
            }
            if (recid===undefined || sendid===undefined){
                toast.error("Sender or Receiver's Email does not exist! Try Again!")
            }
            else{
                let sendref=doc(db,'Customers_Data',sendid);
                let recref=doc(db,'Customers_Data',recid);
                await updateDoc(sendref,{Balance : Number(sendbalance) - Number(amount1)})
                await updateDoc(recref,{Balance : Number(recbalance) + Number(amount1)})
                toast.success("Your Transaction was Succesful!!")
                await addDoc(transaction_ref,{
                    Sender:sendname,
                    Reciever:recname,
                    Amount:amount1
                })
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went Wrong!!")

        }
    }
    async function onSubmit2(e) {
        try {
            let sendid,recid,sendbalance,recbalance,sendname,recname;
            custdata.forEach((data)=>{
                // console.log(data);
                if (data.Email === sender2){
                    sendid=data.id;
                    sendbalance=data.Balance;
                    sendname=data.Name;
                }
                if (data.Email === reciever2){
                    recid=data.id;
                    recbalance=data.Balance;
                    recname=data.Name;
                }
                console.log(sendid,sendbalance,recid,recbalance);

            })
            if (sendbalance < amount2){
                toast.error("Sender's account has insufficient Balance!")
            }
            if (recid===undefined || sendid===undefined){
                toast.error("Sender or Receiver's Email does not exist! Try Again!")
            }
            else{
                let sendref=doc(db,'Customers_Data',sendid);
                let recref=doc(db,'Customers_Data',recid);
                await updateDoc(sendref,{Balance : Number(sendbalance) - Number(amount2)})
                await updateDoc(recref,{Balance : Number(recbalance) + Number(amount2)})
                toast.success("Your Transaction was Succesful!!")
                await addDoc(transaction_ref,{
                    Sender:sendname,
                    Reciever:recname,
                    Amount:amount2
                })

            }

        } catch (error) {
            console.log(error)
            toast.error("Something went Wrong!!")

        }
    }

    useEffect(() => {
        let getCustomers = async () => {
            let data = await getDocs(custdbref);
            setcustdata(data.docs.map((doc => ({ ...doc.data(), id: doc.id }))))
        }

        getCustomers();
    }, [])

    return (
        <>
            <div className='modalsdiv'>

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
                            <Button className='bg-green-600 hover:bg-green-800 border-none' onClick={() => {
                                handleShow();
                                setModalShow();
                            }}>Send Money</Button>
                            <Button onClick={() => setModalShow(false)} className='bg-blue-600 hover:bg-blue-500'>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header >
                        <Modal.Title>Send Money</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form >

                            <Form.Group controlId='sender1' className="mb-3" >
                                <Form.Label> Sender's Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                    onChange={onChanged1}
                                />
                            </Form.Group>

                            <Form.Group controlId='reciever' className="mb-3"  >
                                <Form.Label> Reciever's Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                    value={email}
                                    disabled
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId='amount1'
                            >
                                <Form.Label>Amount to be transfered</Form.Label>
                                <Form.Control type='number' placeholder='Rs.' onChange={onChanged1} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='bg-red-500 border-none hover:bg-red-700 active:bg-red-600' onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button className='bg-green-500 border-none hover:bg-green-800' type='submit' onClick={() => {
                            handleClose()
                            onSubmit()
                        }}>
                            Send Money
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={secondmodal} onHide={secondhandleClose} className='secondmodal'>
                    <Modal.Header>
                        <Modal.Title >Send Money</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form >

                            <Form.Group controlId='sender2' className="mb-3" >
                                <Form.Label> Sender's Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                    onChange={onChanged2}
                                />
                            </Form.Group>

                            <Form.Group controlId='reciever2' className="mb-3"  >
                                <Form.Label> Reciever's Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    onChange={onChanged2}
                                    
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId='amount2'
                            >
                                <Form.Label>Amount to be transfered</Form.Label>
                                <Form.Control type='number' placeholder='Rs.' onChange={onChanged2} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='bg-red-500 border-none hover:bg-red-700 active:bg-red-600' onClick={secondhandleClose}>
                            Cancel
                        </Button>
                        <Button className='bg-green-500 border-none hover:bg-green-800' type='submit' onClick={() => {
                            secondhandleClose()
                            onSubmit2()
                        }}>
                            Send Money
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>

            <div className='maincontdiv'>

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

                <div className='flex justify-center items-center flex-wrap space-x-5 my-2 mb-5 text-black sm:flex-col sm:space-y-4'>

                    <button className='bg-green-500 px-3 py-2 flex rounded justify-center items-center space-x-1 font-medium hover:border border-black ease-in-out duration-200' onClick={secondhandleShow}><FcMoneyTransfer className='text-xl' id='transactionslogo' />Send Money</button>

                    <button className='bg-blue-500 px-3 py-2 flex rounded justify-center items-center space-x-1 font-medium hover:border border-black ease-in-out duration-200 hover:text-black'><Link to="/transaction-history" className="hover:text-black"> <GrTransaction className='text-xl rounded inline-flex' id='transactionslogo' />See all Transactions</Link></button>

                </div>
            </div>
        </>
    )
}



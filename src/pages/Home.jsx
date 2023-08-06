import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

const Home = () => {

    const [tableData, setTableData] = useState([]);

    const [user, setUser] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);

        setTableData(
            [...tableData, user]
        );

        setUser({
            name: '',
            email: ''
        })
    };

    const handleDelete = (index) => {
        const deleteData = tableData.filter((item, i) => i !== index);
        setTableData(deleteData);
    };

    return (
        <div>
            <h1 className='text-2xl font-bold text-center my-5'>
                Provide your Name & E-mail here
            </h1>
            <form
                className='form mt-5 text-left border w-72 m-auto p-5'
                onSubmit={handleSubmit}>

                <p className='text-xl'>
                    Name:
                </p>
                <input
                    type='text'
                    name='name'
                    placeholder='Your name'
                    value={user.name}
                    className='mb-5 mt-2 rounded border p-1.5 w-full'
                    onChange={handleChange} />

                <p className='text-xl'>
                    Email:
                </p>
                <input
                    type='email'
                    name='email'
                    placeholder='Your email'
                    value={user.email}
                    className='mt-2 border rounded p-1.5 w-full'
                    onChange={handleChange} />

                <button
                    className='w-full bg-black text-white p-2 text-center mt-5'
                    type='submit'>
                    Add
                </button>
            </form>

            <h1 className='text-2xl text-center my-5'>
                Selected List here
            </h1>

            <table className='w-full mt-5 text-center'>
                <tr>
                    <th>Names</th>
                    <th>Emails</th>
                    <th>Actions</th>
                </tr>

                {tableData.map((item, index) => (
                    <tr className='w-full'>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>
                            <button
                                className='text-red-600'
                                onClick={() => handleDelete(index)}>
                                Delete
                            </button>
                        </td>
                        <AiFillDelete onClick={() => handleDelete(index)} />
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default Home;
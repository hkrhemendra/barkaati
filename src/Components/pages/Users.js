import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import SectionStart from '../SectionStart';

const Users = () => {
    return (
        <div>
            <Header/>
            <SectionStart title="Users List" address="Users"/>
            <div className='container my-5'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope='col'>Address</th>
                            <th scope='col'>Occupation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Vijay nagar</td>
                            <td>Software Engineer</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Vijay nagar</td>
                            <td>Software Engineer</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            <td>Vijay nagar</td>
                            <td>Software Engineer</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    );
}

export default Users;

import React, { useEffect } from 'react'
import AppRoutes from '../Routes/Routes'
import { useDispatch } from 'react-redux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import { getCategories } from '../../Features/categories/categoriesSlice';


function App() {

    const dispatch = useDispatch()
    console.log("jjj")
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return (
        <div className='app'>
            <Header />

            <div className='container'>
                <Sidebar />
                <AppRoutes />
            </div>

            <Footer />
        </div>
    )
}

export default App
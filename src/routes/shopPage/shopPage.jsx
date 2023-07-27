import React, { Fragment, useEffect } from 'react';
import "./shopPage.scss"
import { useDispatch } from 'react-redux';
import { getCatagoriesAndDocuments } from '../../utilitis/firebase/firebase';
import { setcategories } from '../../store/products/product-reducer';
import CategoriesPreview from '../../components/categories-preview/categories-preview';
import { Route, Routes } from 'react-router-dom';

const ShopPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getCategories = async()=>{
            const categories = await getCatagoriesAndDocuments('categories');
            dispatch(setcategories(categories))
        }
        getCategories()
    }, []);
    return (
        <Fragment>
            <Routes>
                <Route index element={<CategoriesPreview/>}/>
            </Routes>
        </Fragment>
    );
}

export default ShopPage;

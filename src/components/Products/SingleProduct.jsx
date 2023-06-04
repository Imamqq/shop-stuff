import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../Features/api/apiSlice'
import { ROUTES } from '../../utils/routes'
import Product from './Product'
import Products from './Products'
import { useDispatch, useSelector } from 'react-redux'
import { getRelatedProducts } from '../../Features/products/productsSlice'

const SingleProduct = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispath = useDispatch()
    const { list, related } = useSelector(({ products }) => products)

    const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id })

    useEffect(() => {
        if (!isLoading && !isFetching && !isSuccess) {
            navigate(ROUTES.HOME)
        }
    }, [isLoading, isFetching, isSuccess, navigate])

    useEffect(() => {
        if (!data || !list.length) return

        dispath(getRelatedProducts(data.category.id))

    }, [data, dispath, list.length])

    return (
        !data ? (
            <section className="preloader">Loading...</section>
        ) : (
            <>
                <Product {...data} />
                <Products products={related} amount={5} title="Related products" />
            </>
        )
    )
}

export default SingleProduct
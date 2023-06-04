import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from '../../styles/User.module.css'
import UserSignUpForm from './UserSignUpForm'
import { toggleForm, toggleFormType } from '../../Features/user/userSlice'
import UserLoginForm from './UserLoginForm'

const UserForm = () => {

    const dispatch = useDispatch()
    const { showForm, formType } = useSelector(({ user }) => user)

    const closeForm = () => dispatch(toggleForm(false))
    const closeCurrentFormType = (type) => dispatch(toggleFormType(type))

    return showForm ? (
        <>
            <div className={styles.overlay} onClick={closeForm} />
            {formType === 'signup'
                ? <UserSignUpForm closeCurrentFormType={closeCurrentFormType} closeForm={closeForm} />
                : <UserLoginForm closeCurrentFormType={closeCurrentFormType} closeForm={closeForm} />}
        </>)
        : (
            <></>
        );
}

export default UserForm
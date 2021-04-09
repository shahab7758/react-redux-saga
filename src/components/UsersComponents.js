import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import Card from './CardComponents';

const Users = () => {
    const dispatch = useDispatch()
    const { users, loading, error } = useSelector((state) => ({
        users: state.users.users,
        loading: state.users.loading,
        error: state.users.error
    }), shallowEqual)


    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (
        <>
            {loading && <p>loading...</p>}
            {users.length > 0 && users.map((user) => (
                <Card user={user} key={user.id} />
            )
            )}
            {users.length === 0 && !loading && <p>No users available!</p>}
            {error && !loading && <p>{error}</p>}
        </>
    );
}

export default Users;
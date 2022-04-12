import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please login</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign in</button>
            </div>

            <form>
                <input type="email" placeholder='your email' />
                <br />
                <input type="password" name='' id='' placeholder='password' />
                <br />
                <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;
import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import google from '../../../images/google(1).png';
import github from '../../../images/Github.png';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [SignInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <div className='d-grid col-sm-12'>
                    <button onClick={() => signInWithGoogle()} style={{ margin: '0 auto' }} className='btn btn-info d-block col-lg-6 social-btn my-2'>
                        <img src={google} alt="" />
                        <span className='px-2'>Google Sign In</span>
                    </button>
                </div>
                <div className='d-grid col-sm-12'>
                    <button onClick={() => SignInWithGithub()} style={{ margin: '0 auto' }} className='btn btn-info d-block col-lg-6 social-btn my-2'>
                        <img src={github} alt="" />
                        <span className='px-2'>Github Sign In</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;
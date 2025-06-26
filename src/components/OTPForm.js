import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyLogin } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

const OTPForm = ({ mobile, expectedOtp }) => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const { login: doLogin } = useAuth();

  const handleVerify = async () => {
    if (otp === expectedOtp) {
      try {
        const response = await verifyLogin(mobile);
        const { token, user } = response.data;

        doLogin(token, user);
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        navigate('/home');
      } catch (error) {
        if (error?.response?.status === 404) {
          navigate('/register');
        } else {
          console.error('Login error:', error);
        }
      }
    } else {
      alert('Invalid OTP. Please enter the correct OTP.');
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border px-3 py-2 rounded w-full"
        placeholder="Enter OTP"
      />
      <button
        onClick={handleVerify}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default OTPForm;
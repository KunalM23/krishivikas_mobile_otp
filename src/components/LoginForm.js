import { useState } from 'react';
import OTPForm from './OTPForm';
import { sendOTP } from '../services/api';

const LoginForm = () => {
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [apiOtp, setApiOtp] = useState('');

  const handleSendOtp = async () => {
    try {
      const response = await sendOTP(mobile);
      setApiOtp(response.data.otp);
      setOtpSent(true);
    } catch (error) {
      console.error('Failed to send OTP', error);
    }
  };

  return (
    <div className="space-y-4">
      {!otpSent ? (
        <div>
          <input
            type="text"
            placeholder="Enter mobile number"
            className="border p-2 rounded w-full"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button
            onClick={handleSendOtp}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send OTP
          </button>
        </div>
      ) : (
        <OTPForm mobile={mobile} apiOtp={apiOtp} />
      )}
    </div>
  );
};

export default LoginForm;
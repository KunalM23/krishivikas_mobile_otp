import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  const { token } = useAuth(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/home'); 
    }
  }, [token, navigate]);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;


import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
      const response = await registerUser(formData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/home');
    } catch (err) {
      console.error('Registration failed', err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('name')} placeholder="Full Name" className="input" />
      <input {...register('mobile')} placeholder="Mobile" className="input" />
      <input {...register('email')} placeholder="Email" className="input" />
      <input {...register('company_name')} placeholder="Company Name" className="input" />
      <input {...register('gst_no')} placeholder="GST No" className="input" />
      <input {...register('pan_no')} placeholder="PAN No" className="input" />
      <input {...register('location_id')} placeholder="Location ID" className="input" />
      <input type="file" {...register('profile_image')} className="input" />
      <input {...register('user_type_id')} placeholder="User Type ID" className="input" />
      <input {...register('login_via')} placeholder="Login Via (ANDROID/IOS)" className="input" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default RegisterForm;

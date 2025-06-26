import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white shadow-md p-6 rounded-lg">
      <div>
        <label className="block font-medium mb-1">Full Name</label>
        <input
          {...register('name', { required: 'Full name is required' })}
          placeholder="John Doe"
          className="w-full px-4 py-2 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">Mobile</label>
        <input
          {...register('mobile', { required: 'Mobile number is required' })}
          placeholder="9876543210"
          className="w-full px-4 py-2 border rounded"
        />
        {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          {...register('email')}
          placeholder="you@example.com"
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Company Name</label>
        <input
          {...register('company_name')}
          placeholder="ABC Pvt Ltd"
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">GST No</label>
        <input
          {...register('gst_no')}
          placeholder="22ABCDE1234F1Z5"
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">PAN No</label>
        <input
          {...register('pan_no')}
          placeholder="ABCDE1234F"
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Location ID</label>
        <input
          {...register('location_id')}
          placeholder="132050"
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Profile Image</label>
        <input type="file" {...register('profile_image')} className="w-full" />
      </div>

      <div>
        <label className="block font-medium mb-1">User Type ID</label>
        <input
          {...register('user_type_id')}
          placeholder="1"
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Login Via</label>
        <select {...register('login_via')} className="w-full px-4 py-2 border rounded">
          <option value="">Select</option>
          <option value="ANDROID">ANDROID</option>
          <option value="IOS">IOS</option>
        </select>
      </div>

      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto bg-white p-6 shadow-lg rounded-lg space-y-5"
    >
      <div>
        <label className="block mb-1 font-medium">Full Name</label>
        <input
          {...register('name')}
          placeholder="Enter your full name"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Mobile</label>
        <input
          {...register('mobile')}
          placeholder="Enter your mobile number"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          {...register('email')}
          placeholder="Enter your email address"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Company Name</label>
        <input
          {...register('company_name')}
          placeholder="Company name (if any)"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">GST No</label>
        <input
          {...register('gst_no')}
          placeholder="e.g., 22ABCDE1234F1Z5"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">PAN No</label>
        <input
          {...register('pan_no')}
          placeholder="e.g., ABCDE1234F"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Location ID</label>
        <input
          {...register('location_id')}
          placeholder="Location ID"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Profile Image</label>
        <input
          type="file"
          {...register('profile_image')}
          className="w-full border border-gray-300 rounded px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">User Type ID</label>
        <input
          {...register('user_type_id')}
          placeholder="Enter user type ID (e.g., 1)"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Login Via</label>
        <select
          {...register('login_via')}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select</option>
          <option value="ANDROID">ANDROID</option>
          <option value="IOS">IOS</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;

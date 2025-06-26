
const Profile = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Welcome, {data?.name}</h2>
      <p><strong>Company:</strong> {data?.company_name}</p>
      <p><strong>Email:</strong> {data?.email}</p>
      <p><strong>GST No:</strong> {data?.gst_no}</p>
      <p><strong>PAN No:</strong> {data?.pan_no}</p>
      <p><strong>Location ID:</strong> {data?.location_id}</p>
    </div>
  );
};

export default Profile;

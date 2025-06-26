import { useQuery } from '@tanstack/react-query';
import { fetchProfile } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import Profile from '../components/Profile';

const HomePage = () => {
  const { user, token } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: () => fetchProfile(user.id, token),
    enabled: !!user?.id && !!token
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading profile</p>;

  return (
    <div className="p-4">
      <Profile data={data?.data} />
    </div>
  );
};

export default HomePage;

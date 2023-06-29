import Profile from "@components/Profile";


interface PublicProfilePageProps {
  params: { id: string };
}

export default async function PublicProfilePage({
  params,
}: PublicProfilePageProps) {
  const { id } = params;

  const fetchCourses = async () => {
    const response = await fetch(`http://127.0.0.1:3000/api/user/${id}/course`);
    return await response.json();
  };

  const fetchUser = async () => {
    const response = await fetch(`http://127.0.0.1:3000/api/user/${id}`);
    return await response.json();
  };

  

  const courses = await fetchCourses();
  const user = await fetchUser();

  return (
    <>
      <h1 className="head_text text-left ">
        <span className="blue_gradient">Profile of {user.username} </span>
      </h1>

      <Profile courses={courses}/>
    </>
  );
}

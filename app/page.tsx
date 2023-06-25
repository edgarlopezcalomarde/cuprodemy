import Feed from "@components/Feed";

function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Create & Share
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">Wonderful Courses</span>
      </h1>

      <p className="desc text-center">
        Cuprodemy is a system for the creation, management and exhibition of
        programming courses.
      </p>

      <Feed />
    </section>
  );
}

export default Home;

import Feed from "@components/Feed";
//This render our home Page
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">   
            Dicover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">Expert-Led Insights</span>
        </h1>
        <p className="desc text-center">
          GuidanceWave is an open-source platform connecting individuals with seasoned professionals in various fields, enabling you to discover, create, and share expert-led insights for your personal and professional growth.
        </p>


        {/* Feed commponent */}
        <Feed />
    </section>
  )
}

export default Home
import SearchForm from "../../../components/SearchForm"
import StartupCard from "../../../components/StartupCard"

const Home = async({ searchParams } : {
  searchParams: Promise<{ query?: string}>
}) => {

  const query = (await searchParams).query
  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: 'Amanze'},
    _id: 1,
    description: 'This is a description',
    image: "https://www.shutterstock.com/image-photo/digital-brain-circuit-ai-cocept-600nw-2498421665.jpg",
    category: "Tech",
    title: "The impact of Next Js 15"
  }]


  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competition
        </p>
        <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : (
            'All Startups'
          )}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index:number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  )
}

export default Home
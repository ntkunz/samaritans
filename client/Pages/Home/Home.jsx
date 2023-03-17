import './Home.scss'
import Header from '../../src/components/Header/Header'
import Search from '../../src/components/Search/Search'

function Home() {
  return (
    <div className="home">
        <Header />
        <Search />
    </div>
  )
}

export default Home
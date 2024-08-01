
import BlogList from '../components/BlogList';
import Cookies from 'js-cookie'

const Home = () => {
  // Cookies.set('name', 'value')
  Cookies.get('session_token') // => 'value'
  Cookies.get('nothing') // => undefined

  return (
    <div>
      <h1>Home</h1>
      <BlogList />
    </div>
  );
}

export default Home;

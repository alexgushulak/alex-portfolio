import MediaCard from './components/MediaCard';
import MainNavBar from './components/MainNavBar';

export default function App() {
  return (
    <div>
      <MainNavBar />
      <MediaCard title={"Portfolio Project"} description={"Desc 1"} imagePath= {("https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80")} />
      <MediaCard title={"Machine Learning Project"} description={"Desc 2"} imagePath={"./src/assets/business.jpeg"} />
      <MediaCard title={"Thermal Tracker GUI"} description={"Desc 3"} imagePath={"./src/assets/business.jpeg"}/>
    </div>
  );
}
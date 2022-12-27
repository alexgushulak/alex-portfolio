import MediaCard from './components/MediaCard';
import MainNavBar from './components/MainNavBar';

export default function App() {
  return (
    <div>
      <MainNavBar />
      <MediaCard title={"Portfolio Project"} description={"Desc 1"} imagePath= {("./src/assets/business.jpeg")} />
      <MediaCard title={"Machine Learning Project"} description={"Desc 2"} imagePath={"./src/assets/business.jpeg"} />
      <MediaCard title={"Thermal Tracker GUI"} description={"Desc 3"} imagePath={"./src/assets/business.jpeg"}/>
    </div>
  );
}
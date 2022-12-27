import MediaCard from './components/MediaCard';
import MainNavBar from './components/MainNavBar';
import imgUrlBusiness from './assets/business.jpeg';
import imgUrlCliff from './assets/cliff.jpg';
import imgUrlComputer from './assets/computer.jpg';

export default function App() {
  return (
    <div>
      <MainNavBar />
      <MediaCard title={"Portfolio Project"} description={"Desc 1"} imagePath= {(imgUrlComputer)} />
      <MediaCard title={"Machine Learning Project"} description={"Desc 2"} imagePath={imgUrlBusiness} />
      <MediaCard title={"Thermal Tracker GUI"} description={"Desc 3"} imagePath={imgUrlCliff}/>
    </div>
  );
}
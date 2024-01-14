import AssetSection from "./AssetSection/AssetSection";
import Banner from "./Banner/Banner";
import ClassSchedule from "./ClassSchedule/ClassSchedule";
import ClassSection from "./ClassSection/ClassSection";
import TrainerSection from "./TrainerSection/TrainerSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AssetSection></AssetSection>
            <ClassSection></ClassSection>
            <ClassSchedule></ClassSchedule>
            <TrainerSection></TrainerSection>
        </div>
    );
};

export default Home;
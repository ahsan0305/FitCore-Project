import AssetSection from "./AssetSection/AssetSection";
import Banner from "./Banner/Banner";
import ClassSchedule from "./ClassSchedule/ClassSchedule";
import ClassSection from "./ClassSection/ClassSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AssetSection></AssetSection>
            <ClassSection></ClassSection>
            <ClassSchedule></ClassSchedule>
        </div>
    );
};

export default Home;
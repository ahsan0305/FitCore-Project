
import AssetSection from "./AssetSection/AssetSection";
import Banner from "./Banner/Banner";
import ClassSchedule from "./ClassSchedule/ClassSchedule";
import ClassSection from "./ClassSection/ClassSection";
import ClientSection from "./ClientSection/ClientSection";
import MemberSection from "./MemberSection/MemberSection";
import PricingSection from "./PricingSection/PricingSection";
import TrainerSection from "./TrainerSection/TrainerSection";
 


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AssetSection></AssetSection>
            <ClassSection></ClassSection>
            <ClassSchedule></ClassSchedule>
            <TrainerSection></TrainerSection>
            <PricingSection></PricingSection>
            <ClientSection></ClientSection>
            <MemberSection></MemberSection>
            
        </div>
    );
};

export default Home;
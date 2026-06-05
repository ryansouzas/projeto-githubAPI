import ProfileCard from "../../components/ProfileCard";
import SearchCard from "../../components/SearchCard";

export default function After(){
    return(
        <>
        <main className="app-container">
            
            <section>
                <SearchCard/>
            </section>
            
            <section>
                <ProfileCard/>
            </section>
            
        </main>
            
        </>
        
    );
}
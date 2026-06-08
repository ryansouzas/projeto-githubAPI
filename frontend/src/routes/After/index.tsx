import { Outlet } from "react-router-dom";
import SearchCard from "../../components/SearchCard";

export default function After() {
    return (
        <>
            <main className="app-container">

                <section className="mt-40">
                    <SearchCard />
                </section>

                <section className="mt-40">
                    <Outlet />
                </section>

            </main>

        </>

    );
}
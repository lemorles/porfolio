import Navbar from "../components/Navbar";

export default function Layout({ children }) {
    return <>
    <Navbar />
    <main>{children}</main>

    <style jsx>{`
        main {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 16px;
        }
    `}</style>
    </>
}   

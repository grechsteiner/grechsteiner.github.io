import Layout from "../components/Layout";
import IconGrid from "../components/IconGrid";


type AboutProps = { };
  
export default function About({ }: AboutProps): React.JSX.Element {
    return (
        <Layout allowScroll={true}>
            <div className="flex flex-col flex-grow space-y-6">
                <h1 className="text-white text-2xl font-medium">About</h1>
                <div className="text-white">
                    Hey 👋
                    My name is Grayson, and I’m a 3rd year Software Engineering student at the University of Waterloo.
                    In my free time you’ll find me playing (and watching) hockey & baseball, and reading up on interesting technologies both past and present. At the moment I’m reading “…”
                </div>                

                <IconGrid />
            </div> 
        </Layout>
    );
}

import Layout from "../components/Layout";
import IconGrid from "../components/IconGrid";


type AboutProps = { };
  
export default function About({ }: AboutProps): React.JSX.Element {
    return (
        <Layout allowScroll={true}>
            <div className="flex flex-col flex-grow gap-8">
                <div className="text-gray-400 mt-4 text-md">

                    <p className="mb-4">
                        Hey 👋
                    </p>

                    <p className="mb-4">
                        My name is Grayson, and I’m a 3rd year Software Engineering student at the University of Waterloo.
                    </p>

                    <p>
                        In my free time you’ll find me playing (and watching) hockey & baseball, and reading up on interesting technologies both past and present. At the moment I’m reading “…”
                    </p>
                </div>                

                <IconGrid />
            </div> 
        </Layout>
    );
}

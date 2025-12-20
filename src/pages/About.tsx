import Layout from "../components/Layout";
import IconGrid from "../components/IconGrid";


type AboutProps = { };
  
export default function About({ }: AboutProps): React.JSX.Element {
    return (
        <Layout allowScroll={true}>
            <div className="flex flex-col flex-grow gap-8 ">
                <div className="text-gray-400 mt-4 text-md">

                    <h3 className="text-white mb-4 text-xl font-medium">About Me</h3>

                    <p className="mb-4">
                        Hey 👋
                    </p>

                    <p className="mb-4">
                        I'm Grayson, a 4th year Software Engineering student at the University of Waterloo
                    </p>

                    <p>
                        Currently interning at Tenstorrent on the kernel acceleration team, writing collective communication neural network operations for Tenstorrent AI accelerators
                    </p>
                </div>                

                <IconGrid />
            </div> 
        </Layout>
    );
}

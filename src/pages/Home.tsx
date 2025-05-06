import Layout from "../components/Layout";
import Terminal from "../components/Terminal";

type HomeProps = {
    
};
  
export default function Home({ }: HomeProps): React.JSX.Element {
    return (
        <Layout allowScroll={false}>
            <Terminal />
        </Layout>
    );
}

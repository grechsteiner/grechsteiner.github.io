import Layout from "../components/Layout";
import IconGrid from "../components/IconGrid";

type AboutProps = {

};
  
export default function About({ }: AboutProps): React.JSX.Element {
    return (
        <Layout allowScroll={true}>
            <IconGrid />
        </Layout>
    );
}

import Layout from "../components/Layout";
import WorkExperience from "../components/WorkExperience";

type WorkProps = {
    
};
  
export default function Work({ }: WorkProps): React.JSX.Element {
    return (
        <Layout allowScroll={true}>
            <WorkExperience />
        </Layout>
    );
}

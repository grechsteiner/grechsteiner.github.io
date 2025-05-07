import Layout from "../components/Layout";
import TimeLine from "../components/TimeLine";

type WorkProps = {
    
};
  
export default function Work({ }: WorkProps): React.JSX.Element {
    return (
        <Layout allowScroll={true}>
            <TimeLine />
        </Layout>
    );
}

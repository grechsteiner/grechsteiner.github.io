import Layout from "../components/Layout";

type HomeProps = {
    
};
  
export default function Home({ }: HomeProps) {
    return (
        <Layout>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Welcome to My Website</h1>
            <p className="mb-4">
              This is the home page of our website built with React, TypeScript, Vite, and Tailwind CSS.
            </p>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-3">Featured Content</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at velit vel lectus congue aliquet.
              </p>
            </div>
          </div>
        </Layout>
      );
}

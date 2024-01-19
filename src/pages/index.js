import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import "./index.module.css";
import mainImage from "@site/static/img/ms2.jpg";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`M_W Blog`} description="일단 기록하자🫡">
      <main>
        <h1>늦었다고 생각 할때가 너무 늦었다</h1>
        <p>그러니 더 열심히 기록하자✏️</p>
        <img className="mainImage" src={mainImage} />
      </main>
    </Layout>
  );
}

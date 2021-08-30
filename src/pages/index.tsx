import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="parent-card">
      <div className="card card--box-shadow card--light card--orange">
        
          <h1 className="author-post__title mt-5 text-5xl">
            Welcome to <span className="fancy">Tinkered Spirit</span>
          </h1>
          {/* <span className="handle">@nextjs-netlify-blog</span> */}
          <h2>I'm still trying to unvail my mystery! </h2><br/>
          <SocialList />
        </div>
      </div>
      <style jsx>{`

      html, body{
        font-family: 'Roboto' sans-serif;
      }
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-family: 'Roboto' sans-serif;
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 200;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}

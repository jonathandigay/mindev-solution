import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
const Search: NextPage = () => {
  const Routes = useRouter();

  const params = Routes.query.search;
  return (
    <div>
      <Head>
        <title>Mindev Solution | Search</title>
        <meta name="description" content="mindev solution Search" />
        <link rel="icon" href="/mbg.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Container className="searchresult">
        <div
          className="label"
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
        >
          <h3>Mindev Solution</h3>
          <h1>
            Search result of
            {params && (
              <span>
                <span> &quot;</span> {params}
                <span>&quot;</span>
              </span>
            )}
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default Search;

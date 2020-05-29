import React from "react";
import Link from "./link";
import List from "./list";
import Post from "./post";
import Toggle from "./toggle";
import Page404 from "./page404.js";
import { connect, Global, css, styled, Head } from "frontity";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  const { mode } = state.theme;
  return (
    <>
      <title>Rose Hill Body Shop</title>
      <meta name="description" content="Our Car body shop offers car body repairs for commecial and non-commercial cars and vehicals. Our  Car body repair shop is purposly made for bumper repairs, dent removal and Respraying." />
      <meta name="keywords" content="car body repairs southampton, accident recovery, car repairs, dent removal, fleet repairs, contactors, car body work repairs, cheap car body repairs, car accident repairs, car body shop, southampton, hampshire, dent removal southampton." />
      <html lang="en" />
      <Global
        styles={css`
          html {
            font-family: sans-serif;
          }
        `}
      />
      <Global styles={ css`
        body {
          background-color: ${mode === 'light' ? '#fff' : '#222'};
          color: ${mode === 'light' ? '#222' : '#fff'};
          transition: background-color 500ms;
        }` } />
      <Header isPostType={data.isPostType}>
        <h1>Rose Hill Body Shop</h1>
        <Toggle /> 
        <Menu>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </Menu>
      </Header>
      <hr />
      <Main>
        {data.isArchive && <List />}
        {data.isPost && <Post />}
        {data.isPage && <Post />}
        {data.is404 && <Page404 />}
      </Main>
    </>
  );
};

export default connect(Root);

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3em;
    text-align: center;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    margin: 16px;
  }
`;

const Main = styled.main`
  max-width: 800px;
  margin: auto;
  padding: 16px;
  img {
    max-width: 100%;
  }
`;

const Button = styled.button`
  width: 92px;
  margin: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  background: white;
  color: black;
  font-weight: bold;
`;

import React from "react";
import { connect, styled } from "frontity";

const Link = ({ state, href, actions, children }) => {
  const { mode } = state.theme;
  const isDarkMode = mode === 'dark';
  return (
    <div>
      <Anchor
        isDark={isDarkMode}
        href={href}
        onClick={event => {
          event.preventDefault();
          actions.router.set(href);
          actions.theme.closeMenu();
        }}
      >
        {children}
      </Anchor>
    </div>
  );
};

export default connect(Link);

const Anchor = styled.a`
  color: ${({ isDark }) => ( isDark ? '#eee' : 'steelblue')};
`;
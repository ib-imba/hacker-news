import styled from "styled-components";

export const StoryWrapper = styled.section`
  padding: 16px 0;
  border-top: 1px solid #cccccc;

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const StoryTitle = styled.h1`
  margin-bottom: 5px;
  text-decoration: none;

  a {
    color: #3e3e3e;
    background-color: rgba(244, 220, 90, 0.7);
    text-decoration: none;
  }

  a:hover {
    color: #000;
  }
`;

export const StoryMeta = styled.div`
  font-style: italic;

  > span:first-child {
    margin-right: 8px;
  }

  > span:not(:first-child):before {
    content: "™";
  }

  .story__meta-bold {
    font-weight: bold;
  }
`;

export const StoryMetaElement = styled.span`
  font-weight: bold;
  color: ${props => props.color || "red"};
  margin-left: 8px;
`;

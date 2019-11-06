import styled from 'styled-components';

export const StoryWrapper = styled.section`
  padding: 16em;
  margin: 8em;
  border-top: 1px solid #cccccc;

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

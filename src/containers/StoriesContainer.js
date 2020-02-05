import React, { useEffect, useState } from "react";
import { getStoryIds, getStory } from "../services/hnApi";
import { Story } from "../components/Story";
import {
  GlobalStyle,
  StoriesContainerWrapper,
  StoryFooter
} from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);
  // const test = useInfiniteScroll();

  useEffect(() => {
    getStoryIds().then(lemons => setStoryIds(lemons));
    // getStory(20970623).then(data => console.log(data));
  }, []);

  // return (
  //   <div>
  //     <p>{JSON.stringify(storyIds)}</p>
  //   </div>
  // )

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper>
        <h1>Hacker News Story</h1>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
        <StoryFooter>
          <a href="https://bit.ly/3819CT7" target="_blank">
            <img src="./img/download.png" alt="logo" width="24" height="24" />
            <div>see project</div>
          </a>
        </StoryFooter>
      </StoriesContainerWrapper>
    </>
  );
};

export default StoriesContainer;

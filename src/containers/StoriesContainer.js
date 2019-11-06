import React, {useEffect, useState} from 'react';
import { getStoryIds, getStory } from '../services/hnApi';
import { Story } from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles';
export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(lemons => setStoryIds(lemons));
    // getStory(20970623).then(data => console.log(data));
  }, [])

  // return (
  //   <div>
  //     <p>{JSON.stringify(storyIds)}</p>
  //   </div>
  // )

  return (
    <>
      <GlobalStyle/>
      <StoriesContainerWrapper>
        <h1>Hacker News Story</h1>
        {storyIds.map(storyId => (<Story key={storyId} storyId={storyId}/>))}
      </StoriesContainerWrapper>
    </>
  );
};

export default StoriesContainer;


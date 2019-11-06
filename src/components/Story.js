import React, {useState, useEffect} from 'react';
import {getStory} from '../services/hnApi';
import {StoryWrapper} from '../styles/StoryStyles';
export const Story = ({storyId}) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data))
  }, []);

  // return <p>{JSON.stringify(story)}</p>
  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <a href="{story.url}">
        <p>{story.title}</p>
      </a>
      By: <p>{story.by}</p>
      POsted: <p>{story.time}</p>
    </StoryWrapper>
  ) : null;
}

// export default Story;
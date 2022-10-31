package shared

import (
"time")

type DiscussionFolderContract struct {
    Description *string `json:"description,omitempty"`
    ID *int32 `json:"id,omitempty"`
    LastTopicAuthor *UserForAPIContract `json:"lastTopicAuthor,omitempty"`
    LastTopicDate *time.Time `json:"lastTopicDate,omitempty"`
    Name *string `json:"name,omitempty"`
    TopicCount *int32 `json:"topicCount,omitempty"`
    
}


package shared

import (
	"time"
)

type DiscussionFolderContract struct {
	Description     *string             `json:"description"`
	ID              *int32              `json:"id"`
	LastTopicAuthor *UserForAPIContract `json:"lastTopicAuthor"`
	LastTopicDate   *time.Time          `json:"lastTopicDate"`
	Name            *string             `json:"name"`
	TopicCount      *int32              `json:"topicCount"`
}

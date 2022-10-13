package shared

import (
	"time"
)

type DiscussionTopicContract struct {
	Author       *UserForAPIContract     `json:"author"`
	CommentCount *int32                  `json:"commentCount"`
	Comments     []CommentForAPIContract `json:"comments"`
	Content      *string                 `json:"content"`
	Created      *time.Time              `json:"created"`
	FolderID     *int32                  `json:"folderId"`
	ID           *int32                  `json:"id"`
	LastComment  *CommentForAPIContract  `json:"lastComment"`
	Locked       *bool                   `json:"locked"`
	Name         *string                 `json:"name"`
}

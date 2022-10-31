package shared

import (
	"time"
)

type DiscussionTopicContract struct {
	Author       *UserForAPIContract     `json:"author,omitempty"`
	CommentCount *int32                  `json:"commentCount,omitempty"`
	Comments     []CommentForAPIContract `json:"comments,omitempty"`
	Content      *string                 `json:"content,omitempty"`
	Created      *time.Time              `json:"created,omitempty"`
	FolderID     *int32                  `json:"folderId,omitempty"`
	ID           *int32                  `json:"id,omitempty"`
	LastComment  *CommentForAPIContract  `json:"lastComment,omitempty"`
	Locked       *bool                   `json:"locked,omitempty"`
	Name         *string                 `json:"name,omitempty"`
}

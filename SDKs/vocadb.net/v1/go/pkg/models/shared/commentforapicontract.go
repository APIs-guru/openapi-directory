package shared

import (
	"time"
)

type CommentForAPIContract struct {
	Author     *UserForAPIContract `json:"author,omitempty"`
	AuthorName *string             `json:"authorName,omitempty"`
	Created    *time.Time          `json:"created,omitempty"`
	Entry      *EntryRefContract   `json:"entry,omitempty"`
	ID         *int32              `json:"id,omitempty"`
	Message    *string             `json:"message,omitempty"`
}

package shared

import (
	"time"
)

type CommentForAPIContract struct {
	Author     *UserForAPIContract `json:"author"`
	AuthorName *string             `json:"authorName"`
	Created    *time.Time          `json:"created"`
	Entry      *EntryRefContract   `json:"entry"`
	ID         *int32              `json:"id"`
	Message    *string             `json:"message"`
}

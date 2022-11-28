package shared

import (
	"time"
)

// CommentaryCommentaryEmployee
// The commentarys' employee
type CommentaryCommentaryEmployee struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

// CommentaryCommentaryPayRun
// The commentarys' pay run
type CommentaryCommentaryPayRun struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type CommentaryCommentary struct {
	Created  *time.Time                    `json:"Created,omitempty"`
	Detail   *string                       `json:"Detail,omitempty"`
	Employee *CommentaryCommentaryEmployee `json:"Employee,omitempty"`
	PayRun   *CommentaryCommentaryPayRun   `json:"PayRun,omitempty"`
}

type Commentary struct {
	Commentary *CommentaryCommentary `json:"Commentary,omitempty"`
}

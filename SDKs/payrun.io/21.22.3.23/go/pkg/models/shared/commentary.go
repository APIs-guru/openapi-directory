package shared

import (
	"time"
)

type CommentaryCommentaryEmployee struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

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

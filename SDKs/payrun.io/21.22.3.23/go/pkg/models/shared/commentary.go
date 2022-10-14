package shared

import (
	"time"
)

type CommentaryCommentaryEmployeeEmployee struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type CommentaryCommentaryPayRunPayRun struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type CommentaryCommentaryCommentary struct {
	Created  *time.Time                            `json:"Created,omitempty"`
	Detail   *string                               `json:"Detail,omitempty"`
	Employee *CommentaryCommentaryEmployeeEmployee `json:"Employee,omitempty"`
	PayRun   *CommentaryCommentaryPayRunPayRun     `json:"PayRun,omitempty"`
}

type Commentary struct {
	Commentary *CommentaryCommentaryCommentary `json:"Commentary,omitempty"`
}

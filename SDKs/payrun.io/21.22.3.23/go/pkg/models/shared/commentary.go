package shared

import (
	"time"
)

type CommentaryCommentaryEmployeeEmployee struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type CommentaryCommentaryPayRunPayRun struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type CommentaryCommentaryCommentary struct {
	Created  *time.Time                            `json:"Created"`
	Detail   *string                               `json:"Detail"`
	Employee *CommentaryCommentaryEmployeeEmployee `json:"Employee"`
	PayRun   *CommentaryCommentaryPayRunPayRun     `json:"PayRun"`
}

type Commentary struct {
	Commentary *CommentaryCommentaryCommentary `json:"Commentary"`
}

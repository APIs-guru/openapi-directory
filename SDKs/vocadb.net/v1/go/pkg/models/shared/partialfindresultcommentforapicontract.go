package shared

type PartialFindResultCommentForAPIContract struct {
	Items      []CommentForAPIContract `json:"items"`
	Term       *string                 `json:"term"`
	TotalCount *int32                  `json:"totalCount"`
}

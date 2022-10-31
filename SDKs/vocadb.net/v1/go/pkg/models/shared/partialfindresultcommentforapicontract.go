package shared

type PartialFindResultCommentForAPIContract struct {
	Items      []CommentForAPIContract `json:"items,omitempty"`
	Term       *string                 `json:"term,omitempty"`
	TotalCount *int32                  `json:"totalCount,omitempty"`
}

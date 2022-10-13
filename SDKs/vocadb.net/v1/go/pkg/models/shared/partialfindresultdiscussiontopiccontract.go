package shared

type PartialFindResultDiscussionTopicContract struct {
	Items      []DiscussionTopicContract `json:"items"`
	Term       *string                   `json:"term"`
	TotalCount *int32                    `json:"totalCount"`
}

package shared

type PartialFindResultDiscussionTopicContract struct {
	Items      []DiscussionTopicContract `json:"items,omitempty"`
	Term       *string                   `json:"term,omitempty"`
	TotalCount *int32                    `json:"totalCount,omitempty"`
}

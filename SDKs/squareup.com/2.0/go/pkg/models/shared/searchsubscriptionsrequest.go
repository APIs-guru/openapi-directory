package shared

type SearchSubscriptionsRequest struct {
	Cursor *string                   `json:"cursor,omitempty"`
	Limit  *int64                    `json:"limit,omitempty"`
	Query  *SearchSubscriptionsQuery `json:"query,omitempty"`
}

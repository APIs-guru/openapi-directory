package shared

type SearchSubscriptionsRequest struct {
	Cursor *string                   `json:"cursor"`
	Limit  *int64                    `json:"limit"`
	Query  *SearchSubscriptionsQuery `json:"query"`
}

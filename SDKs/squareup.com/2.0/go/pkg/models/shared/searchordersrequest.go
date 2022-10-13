package shared

type SearchOrdersRequest struct {
	Cursor        *string            `json:"cursor"`
	Limit         *int64             `json:"limit"`
	LocationIds   []string           `json:"location_ids"`
	Query         *SearchOrdersQuery `json:"query"`
	ReturnEntries *bool              `json:"return_entries"`
}

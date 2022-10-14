package shared

type SearchOrdersRequest struct {
	Cursor        *string            `json:"cursor,omitempty"`
	Limit         *int64             `json:"limit,omitempty"`
	LocationIds   []string           `json:"location_ids,omitempty"`
	Query         *SearchOrdersQuery `json:"query,omitempty"`
	ReturnEntries *bool              `json:"return_entries,omitempty"`
}

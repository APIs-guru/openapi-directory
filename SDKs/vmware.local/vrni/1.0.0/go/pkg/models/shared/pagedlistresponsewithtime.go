package shared

type PagedListResponseWithTime struct {
	Cursor     *string            `json:"cursor"`
	EndTime    *int64             `json:"end_time"`
	Results    []EntityIDWithTime `json:"results"`
	StartTime  *int64             `json:"start_time"`
	TotalCount *int64             `json:"total_count"`
}

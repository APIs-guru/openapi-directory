package shared

type PagedListResponse struct {
	Cursor     *string    `json:"cursor,omitempty"`
	EndTime    *int64     `json:"end_time,omitempty"`
	Results    []EntityID `json:"results,omitempty"`
	StartTime  *int64     `json:"start_time,omitempty"`
	TotalCount *int64     `json:"total_count,omitempty"`
}

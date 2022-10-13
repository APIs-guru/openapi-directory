package shared

type PagedListResponse struct {
	Cursor     *string    `json:"cursor"`
	EndTime    *int64     `json:"end_time"`
	Results    []EntityID `json:"results"`
	StartTime  *int64     `json:"start_time"`
	TotalCount *int64     `json:"total_count"`
}

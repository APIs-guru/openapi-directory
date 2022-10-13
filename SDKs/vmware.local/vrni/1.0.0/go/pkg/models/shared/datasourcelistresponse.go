package shared

type DataSourceListResponse struct {
	Results    []DataSourceEntityID `json:"results"`
	TotalCount *int64               `json:"total_count"`
}

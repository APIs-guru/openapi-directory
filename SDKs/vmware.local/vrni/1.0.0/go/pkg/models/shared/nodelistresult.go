package shared

type NodeListResult struct {
	Results    []NodeID `json:"results"`
	TotalCount *int64   `json:"total_count"`
}

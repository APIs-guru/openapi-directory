package shared

type NodeListResult struct {
	Results    []NodeID `json:"results,omitempty"`
	TotalCount *int64   `json:"total_count,omitempty"`
}

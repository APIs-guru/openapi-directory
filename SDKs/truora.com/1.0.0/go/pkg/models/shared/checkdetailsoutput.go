package shared

type CheckDetailsOutput struct {
	Details []CheckDetails `json:"details"`
	Next    *string        `json:"next"`
	Self    string         `json:"self"`
}

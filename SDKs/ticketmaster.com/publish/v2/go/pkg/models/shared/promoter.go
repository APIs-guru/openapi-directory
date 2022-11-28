package shared

// Promoter
// Promoter
type Promoter struct {
	Descriptions map[string]string `json:"descriptions,omitempty"`
	ID           *string           `json:"id,omitempty"`
	Names        map[string]string `json:"names,omitempty"`
}

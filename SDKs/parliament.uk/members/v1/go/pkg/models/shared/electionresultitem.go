package shared

type ElectionResultItem struct {
	Links []Link          `json:"links,omitempty"`
	Value *ElectionResult `json:"value,omitempty"`
}

package shared

type ElectionResultItem struct {
	Links []Link          `json:"links"`
	Value *ElectionResult `json:"value"`
}

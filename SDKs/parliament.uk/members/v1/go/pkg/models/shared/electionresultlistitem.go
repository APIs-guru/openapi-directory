package shared

type ElectionResultListItem struct {
	Links []Link           `json:"links,omitempty"`
	Value []ElectionResult `json:"value,omitempty"`
}

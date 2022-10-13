package shared

type ElectionResultListItem struct {
	Links []Link           `json:"links"`
	Value []ElectionResult `json:"value"`
}

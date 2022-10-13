package shared

type Rule struct {
	ID    *string `json:"id"`
	Tag   *string `json:"tag"`
	Value string  `json:"value"`
}

package shared

type Rule struct {
	ID    *string `json:"id,omitempty"`
	Tag   *string `json:"tag,omitempty"`
	Value string  `json:"value"`
}

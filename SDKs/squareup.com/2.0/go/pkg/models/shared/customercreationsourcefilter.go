package shared

type CustomerCreationSourceFilter struct {
	Rule   *string  `json:"rule"`
	Values []string `json:"values"`
}

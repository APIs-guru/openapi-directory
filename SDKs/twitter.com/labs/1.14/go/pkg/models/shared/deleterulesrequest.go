package shared

type DeleteRulesRequest struct {
	Ids    []string `json:"ids"`
	Values []string `json:"values"`
}

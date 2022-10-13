package shared

type State struct {
	Names     map[string]string `json:"names"`
	StateCode *string           `json:"stateCode"`
}

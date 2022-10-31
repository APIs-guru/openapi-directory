package shared

type AddRulesResponse struct {
	Data []Rule                `json:"data"`
	Meta RulesResponseMetadata `json:"meta"`
}

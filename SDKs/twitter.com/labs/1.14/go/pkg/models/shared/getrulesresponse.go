package shared



type GetRulesResponse struct {
    Data []Rule `json:"data"`
    Meta RulesResponseMetadata `json:"meta"`
    
}


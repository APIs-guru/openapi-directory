package shared



type AccountsResponseData struct {
    Accounts []Account `json:"accounts"`
    ServerKnowledge int64 `json:"server_knowledge"`
    
}

type AccountsResponse struct {
    Data AccountsResponseData `json:"data"`
    
}


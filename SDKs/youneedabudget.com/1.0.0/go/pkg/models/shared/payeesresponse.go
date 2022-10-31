package shared



type PayeesResponseData struct {
    Payees []Payee `json:"payees"`
    ServerKnowledge int64 `json:"server_knowledge"`
    
}

type PayeesResponse struct {
    Data PayeesResponseData `json:"data"`
    
}


package shared



type BudgetDetailResponseData struct {
    Budget BudgetDetail `json:"budget"`
    ServerKnowledge int64 `json:"server_knowledge"`
    
}

type BudgetDetailResponse struct {
    Data BudgetDetailResponseData `json:"data"`
    
}


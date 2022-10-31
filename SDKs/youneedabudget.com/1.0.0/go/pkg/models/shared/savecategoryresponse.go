package shared



type SaveCategoryResponseData struct {
    Category Category `json:"category"`
    ServerKnowledge int64 `json:"server_knowledge"`
    
}

type SaveCategoryResponse struct {
    Data SaveCategoryResponseData `json:"data"`
    
}


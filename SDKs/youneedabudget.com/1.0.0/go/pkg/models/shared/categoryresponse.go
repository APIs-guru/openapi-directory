package shared



type CategoryResponseData struct {
    Category Category `json:"category"`
    
}

type CategoryResponse struct {
    Data CategoryResponseData `json:"data"`
    
}


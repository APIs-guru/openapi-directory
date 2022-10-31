package operations



type PostPortfolioOptimizationEqualWeightedRequestBody struct {
    Assets int64 `json:"assets"`
    
}

type PostPortfolioOptimizationEqualWeightedRequest struct {
    Request PostPortfolioOptimizationEqualWeightedRequestBody `request:"mediaType=application/json"`
    
}

type PostPortfolioOptimizationEqualWeighted200ApplicationJSON struct {
    AssetsWeights []float64 `json:"assetsWeights"`
    
}

type PostPortfolioOptimizationEqualWeightedResponse struct {
    ContentType string 
    PostPortfolioOptimizationEqualWeighted200ApplicationJSONObject *PostPortfolioOptimizationEqualWeighted200ApplicationJSON 
    StatusCode int64 
    
}


package operations



type PostPortfolioOptimizationMinimumCorrelationRequestBody struct {
    Assets int64 `json:"assets"`
    AssetsCorrelationMatrix [][]float64 `json:"assetsCorrelationMatrix"`
    AssetsVolatilities []float64 `json:"assetsVolatilities"`
    
}

type PostPortfolioOptimizationMinimumCorrelationRequest struct {
    Request PostPortfolioOptimizationMinimumCorrelationRequestBody `request:"mediaType=application/json"`
    
}

type PostPortfolioOptimizationMinimumCorrelation200ApplicationJSON struct {
    AssetsWeights []float64 `json:"assetsWeights"`
    
}

type PostPortfolioOptimizationMinimumCorrelationResponse struct {
    ContentType string 
    PostPortfolioOptimizationMinimumCorrelation200ApplicationJSONObject *PostPortfolioOptimizationMinimumCorrelation200ApplicationJSON 
    StatusCode int64 
    
}


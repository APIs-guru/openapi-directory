package operations



type PostPortfolioOptimizationMaximumReturnRequestBodyConstraints struct {
    AssetsGroups [][]int64 `json:"assetsGroups,omitempty"`
    AssetsGroupsMatrix [][]float64 `json:"assetsGroupsMatrix,omitempty"`
    MaximumAssetsGroupsWeights []float64 `json:"maximumAssetsGroupsWeights,omitempty"`
    MaximumAssetsWeights []float64 `json:"maximumAssetsWeights,omitempty"`
    MaximumPortfolioExposure *float64 `json:"maximumPortfolioExposure,omitempty"`
    MinimumAssetsWeights []float64 `json:"minimumAssetsWeights,omitempty"`
    MinimumPortfolioExposure *float64 `json:"minimumPortfolioExposure,omitempty"`
    
}

type PostPortfolioOptimizationMaximumReturnRequestBody struct {
    Assets int64 `json:"assets"`
    AssetsCovarianceMatrix [][]float64 `json:"assetsCovarianceMatrix,omitempty"`
    AssetsReturns []float64 `json:"assetsReturns"`
    Constraints *PostPortfolioOptimizationMaximumReturnRequestBodyConstraints `json:"constraints,omitempty"`
    
}

type PostPortfolioOptimizationMaximumReturnRequest struct {
    Request PostPortfolioOptimizationMaximumReturnRequestBody `request:"mediaType=application/json"`
    
}

type PostPortfolioOptimizationMaximumReturn200ApplicationJSON struct {
    AssetsWeights []float64 `json:"assetsWeights"`
    
}

type PostPortfolioOptimizationMaximumReturnResponse struct {
    ContentType string 
    PostPortfolioOptimizationMaximumReturn200ApplicationJSONObject *PostPortfolioOptimizationMaximumReturn200ApplicationJSON 
    StatusCode int64 
    
}


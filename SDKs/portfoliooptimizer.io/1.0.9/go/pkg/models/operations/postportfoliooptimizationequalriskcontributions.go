package operations



type PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints struct {
    MaximumAssetsWeights []float64 `json:"maximumAssetsWeights,omitempty"`
    MinimumAssetsWeights []float64 `json:"minimumAssetsWeights,omitempty"`
    
}

type PostPortfolioOptimizationEqualRiskContributionsRequestBody struct {
    Assets int64 `json:"assets"`
    AssetsCovarianceMatrix [][]float64 `json:"assetsCovarianceMatrix"`
    Constraints *PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints `json:"constraints,omitempty"`
    
}

type PostPortfolioOptimizationEqualRiskContributionsRequest struct {
    Request PostPortfolioOptimizationEqualRiskContributionsRequestBody `request:"mediaType=application/json"`
    
}

type PostPortfolioOptimizationEqualRiskContributions200ApplicationJSON struct {
    AssetsWeights []float64 `json:"assetsWeights"`
    
}

type PostPortfolioOptimizationEqualRiskContributionsResponse struct {
    ContentType string 
    PostPortfolioOptimizationEqualRiskContributions200ApplicationJSONObject *PostPortfolioOptimizationEqualRiskContributions200ApplicationJSON 
    StatusCode int64 
    
}


package operations



type PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints struct {
    AssetsGroups [][]int64 `json:"assetsGroups,omitempty"`
    AssetsGroupsMatrix [][]float64 `json:"assetsGroupsMatrix,omitempty"`
    MaximumAssetsGroupsWeights []float64 `json:"maximumAssetsGroupsWeights,omitempty"`
    MaximumAssetsWeights []float64 `json:"maximumAssetsWeights,omitempty"`
    MaximumPortfolioExposure *float64 `json:"maximumPortfolioExposure,omitempty"`
    MinimumAssetsWeights []float64 `json:"minimumAssetsWeights,omitempty"`
    MinimumPortfolioExposure *float64 `json:"minimumPortfolioExposure,omitempty"`
    PortfolioReturn *float64 `json:"portfolioReturn,omitempty"`
    PortfolioVolatility *float64 `json:"portfolioVolatility,omitempty"`
    RiskTolerance *float64 `json:"riskTolerance,omitempty"`
    
}

type PostPortfolioOptimizationMeanVarianceEfficientRequestBody struct {
    Assets int64 `json:"assets"`
    AssetsCovarianceMatrix [][]float64 `json:"assetsCovarianceMatrix"`
    AssetsReturns []float64 `json:"assetsReturns"`
    Constraints PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints `json:"constraints"`
    
}

type PostPortfolioOptimizationMeanVarianceEfficientRequest struct {
    Request PostPortfolioOptimizationMeanVarianceEfficientRequestBody `request:"mediaType=application/json"`
    
}

type PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJSON struct {
    AssetsWeights []float64 `json:"assetsWeights"`
    
}

type PostPortfolioOptimizationMeanVarianceEfficientResponse struct {
    ContentType string 
    PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJSONObject *PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJSON 
    StatusCode int64 
    
}


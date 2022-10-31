package operations



type PostPortfolioConstructionMimickingRequestBodyAssets struct {
    AssetReturns []float64 `json:"assetReturns"`
    
}

type PostPortfolioConstructionMimickingRequestBodyConstraints struct {
    AssetsGroups [][]int64 `json:"assetsGroups,omitempty"`
    AssetsGroupsMatrix [][]float64 `json:"assetsGroupsMatrix,omitempty"`
    MaximumAssetsGroupsWeights []float64 `json:"maximumAssetsGroupsWeights,omitempty"`
    MaximumAssetsWeights []float64 `json:"maximumAssetsWeights,omitempty"`
    MaximumPortfolioExposure *float64 `json:"maximumPortfolioExposure,omitempty"`
    MinimumAssetsWeights []float64 `json:"minimumAssetsWeights,omitempty"`
    MinimumPortfolioExposure *float64 `json:"minimumPortfolioExposure,omitempty"`
    
}

type PostPortfolioConstructionMimickingRequestBody struct {
    Assets []PostPortfolioConstructionMimickingRequestBodyAssets `json:"assets"`
    BenchmarkReturns []float64 `json:"benchmarkReturns"`
    Constraints *PostPortfolioConstructionMimickingRequestBodyConstraints `json:"constraints,omitempty"`
    
}

type PostPortfolioConstructionMimickingRequest struct {
    Request PostPortfolioConstructionMimickingRequestBody `request:"mediaType=application/json"`
    
}

type PostPortfolioConstructionMimicking200ApplicationJSON struct {
    AssetsWeights []float64 `json:"assetsWeights"`
    
}

type PostPortfolioConstructionMimickingResponse struct {
    ContentType string 
    PostPortfolioConstructionMimicking200ApplicationJSONObject *PostPortfolioConstructionMimicking200ApplicationJSON 
    StatusCode int64 
    
}


package operations

type PostPortfolioOptimizationMaximumReturnRequestBodyConstraints struct {
	AssetsGroups               [][]int64   `json:"assetsGroups"`
	AssetsGroupsMatrix         [][]float64 `json:"assetsGroupsMatrix"`
	MaximumAssetsGroupsWeights []float64   `json:"maximumAssetsGroupsWeights"`
	MaximumAssetsWeights       []float64   `json:"maximumAssetsWeights"`
	MaximumPortfolioExposure   *float64    `json:"maximumPortfolioExposure"`
	MinimumAssetsWeights       []float64   `json:"minimumAssetsWeights"`
	MinimumPortfolioExposure   *float64    `json:"minimumPortfolioExposure"`
}

type PostPortfolioOptimizationMaximumReturnRequestBody struct {
	Assets                 int64                                                         `json:"assets"`
	AssetsCovarianceMatrix [][]float64                                                   `json:"assetsCovarianceMatrix"`
	AssetsReturns          []float64                                                     `json:"assetsReturns"`
	Constraints            *PostPortfolioOptimizationMaximumReturnRequestBodyConstraints `json:"constraints"`
}

type PostPortfolioOptimizationMaximumReturnRequest struct {
	Request PostPortfolioOptimizationMaximumReturnRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioOptimizationMaximumReturn200ApplicationJSON struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioOptimizationMaximumReturnResponse struct {
	ContentType                                                    string
	PostPortfolioOptimizationMaximumReturn200ApplicationJSONObject *PostPortfolioOptimizationMaximumReturn200ApplicationJSON
	StatusCode                                                     int64
}

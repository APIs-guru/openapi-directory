package operations

type PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints struct {
	AssetsGroups               [][]int64   `json:"assetsGroups"`
	AssetsGroupsMatrix         [][]float64 `json:"assetsGroupsMatrix"`
	MaximumAssetsGroupsWeights []float64   `json:"maximumAssetsGroupsWeights"`
	MaximumAssetsWeights       []float64   `json:"maximumAssetsWeights"`
	MaximumPortfolioExposure   *float64    `json:"maximumPortfolioExposure"`
	MinimumAssetsWeights       []float64   `json:"minimumAssetsWeights"`
	MinimumPortfolioExposure   *float64    `json:"minimumPortfolioExposure"`
}

type PostPortfolioOptimizationMinimumVarianceRequestBody struct {
	Assets                 int64                                                           `json:"assets"`
	AssetsCovarianceMatrix [][]float64                                                     `json:"assetsCovarianceMatrix"`
	AssetsReturns          []float64                                                       `json:"assetsReturns"`
	Constraints            *PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints `json:"constraints"`
}

type PostPortfolioOptimizationMinimumVarianceRequest struct {
	Request PostPortfolioOptimizationMinimumVarianceRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioOptimizationMinimumVariance200ApplicationJSON struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioOptimizationMinimumVarianceResponse struct {
	ContentType                                                      string
	PostPortfolioOptimizationMinimumVariance200ApplicationJSONObject *PostPortfolioOptimizationMinimumVariance200ApplicationJSON
	StatusCode                                                       int64
}

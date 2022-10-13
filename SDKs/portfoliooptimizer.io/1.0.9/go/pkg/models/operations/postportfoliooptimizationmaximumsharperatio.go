package operations

type PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints struct {
	AssetsGroups               [][]int64   `json:"assetsGroups"`
	AssetsGroupsMatrix         [][]float64 `json:"assetsGroupsMatrix"`
	MaximumAssetsGroupsWeights []float64   `json:"maximumAssetsGroupsWeights"`
	MaximumAssetsWeights       []float64   `json:"maximumAssetsWeights"`
	MaximumPortfolioExposure   *float64    `json:"maximumPortfolioExposure"`
	MinimumAssetsWeights       []float64   `json:"minimumAssetsWeights"`
	MinimumPortfolioExposure   *float64    `json:"minimumPortfolioExposure"`
}

type PostPortfolioOptimizationMaximumSharpeRatioRequestBody struct {
	Assets                 int64                                                              `json:"assets"`
	AssetsCovarianceMatrix [][]float64                                                        `json:"assetsCovarianceMatrix"`
	AssetsReturns          []float64                                                          `json:"assetsReturns"`
	Constraints            *PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints `json:"constraints"`
	RiskFreeRate           float64                                                            `json:"riskFreeRate"`
}

type PostPortfolioOptimizationMaximumSharpeRatioRequest struct {
	Request PostPortfolioOptimizationMaximumSharpeRatioRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJSON struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioOptimizationMaximumSharpeRatioResponse struct {
	ContentType                                                         string
	PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJSONObject *PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJSON
	StatusCode                                                          int64
}

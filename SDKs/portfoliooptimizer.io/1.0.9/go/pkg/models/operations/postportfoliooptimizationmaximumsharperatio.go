package operations

type PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints struct {
	AssetsGroups               [][]int64   `json:"assetsGroups,omitempty"`
	AssetsGroupsMatrix         [][]float64 `json:"assetsGroupsMatrix,omitempty"`
	MaximumAssetsGroupsWeights []float64   `json:"maximumAssetsGroupsWeights,omitempty"`
	MaximumAssetsWeights       []float64   `json:"maximumAssetsWeights,omitempty"`
	MaximumPortfolioExposure   *float64    `json:"maximumPortfolioExposure,omitempty"`
	MinimumAssetsWeights       []float64   `json:"minimumAssetsWeights,omitempty"`
	MinimumPortfolioExposure   *float64    `json:"minimumPortfolioExposure,omitempty"`
}

type PostPortfolioOptimizationMaximumSharpeRatioRequestBody struct {
	Assets                 int64                                                              `json:"assets"`
	AssetsCovarianceMatrix [][]float64                                                        `json:"assetsCovarianceMatrix"`
	AssetsReturns          []float64                                                          `json:"assetsReturns"`
	Constraints            *PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints `json:"constraints,omitempty"`
	RiskFreeRate           float64                                                            `json:"riskFreeRate"`
}

type PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJSON struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioOptimizationMaximumSharpeRatioRequest struct {
	Request PostPortfolioOptimizationMaximumSharpeRatioRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioOptimizationMaximumSharpeRatioResponse struct {
	ContentType                                                         string
	PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJSONObject *PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJSON
	StatusCode                                                          int64
}

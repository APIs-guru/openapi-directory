package operations

type PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints struct {
	AssetsGroups               [][]int64   `json:"assetsGroups"`
	AssetsGroupsMatrix         [][]float64 `json:"assetsGroupsMatrix"`
	MaximumAssetsGroupsWeights []float64   `json:"maximumAssetsGroupsWeights"`
	MaximumAssetsWeights       []float64   `json:"maximumAssetsWeights"`
	MaximumPortfolioExposure   *float64    `json:"maximumPortfolioExposure"`
	MinimumAssetsWeights       []float64   `json:"minimumAssetsWeights"`
	MinimumPortfolioExposure   *float64    `json:"minimumPortfolioExposure"`
}

type PostPortfolioOptimizationMaximumDecorrelationRequestBody struct {
	Assets                  int64                                                                `json:"assets"`
	AssetsCorrelationMatrix [][]float64                                                          `json:"assetsCorrelationMatrix"`
	AssetsReturns           []float64                                                            `json:"assetsReturns"`
	Constraints             *PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints `json:"constraints"`
}

type PostPortfolioOptimizationMaximumDecorrelationRequest struct {
	Request PostPortfolioOptimizationMaximumDecorrelationRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioOptimizationMaximumDecorrelation200ApplicationJSON struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioOptimizationMaximumDecorrelationResponse struct {
	ContentType                                                           string
	PostPortfolioOptimizationMaximumDecorrelation200ApplicationJSONObject *PostPortfolioOptimizationMaximumDecorrelation200ApplicationJSON
	StatusCode                                                            int64
}

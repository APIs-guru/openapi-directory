package operations

type PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints struct {
	AssetsGroups               [][]int64   `json:"assetsGroups,omitempty"`
	AssetsGroupsMatrix         [][]float64 `json:"assetsGroupsMatrix,omitempty"`
	MaximumAssetsGroupsWeights []float64   `json:"maximumAssetsGroupsWeights,omitempty"`
	MaximumAssetsWeights       []float64   `json:"maximumAssetsWeights,omitempty"`
	MaximumPortfolioExposure   *float64    `json:"maximumPortfolioExposure,omitempty"`
	MinimumAssetsWeights       []float64   `json:"minimumAssetsWeights,omitempty"`
	MinimumPortfolioExposure   *float64    `json:"minimumPortfolioExposure,omitempty"`
}

type PostPortfolioOptimizationMaximumDecorrelationRequestBody struct {
	Assets                  int64                                                                `json:"assets"`
	AssetsCorrelationMatrix [][]float64                                                          `json:"assetsCorrelationMatrix"`
	AssetsReturns           []float64                                                            `json:"assetsReturns,omitempty"`
	Constraints             *PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints `json:"constraints,omitempty"`
}

type PostPortfolioOptimizationMaximumDecorrelation200ApplicationJSON struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioOptimizationMaximumDecorrelationRequest struct {
	Request PostPortfolioOptimizationMaximumDecorrelationRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioOptimizationMaximumDecorrelationResponse struct {
	ContentType                                                           string
	PostPortfolioOptimizationMaximumDecorrelation200ApplicationJSONObject *PostPortfolioOptimizationMaximumDecorrelation200ApplicationJSON
	StatusCode                                                            int64
}

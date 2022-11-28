package operations

type PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints struct {
	AssetsGroups               [][]int64   `json:"assetsGroups,omitempty"`
	AssetsGroupsMatrix         [][]float64 `json:"assetsGroupsMatrix,omitempty"`
	MaximumAssetsGroupsWeights []float64   `json:"maximumAssetsGroupsWeights,omitempty"`
	MaximumAssetsWeights       []float64   `json:"maximumAssetsWeights,omitempty"`
	MaximumPortfolioExposure   *float64    `json:"maximumPortfolioExposure,omitempty"`
	MinimumAssetsWeights       []float64   `json:"minimumAssetsWeights,omitempty"`
	MinimumPortfolioExposure   *float64    `json:"minimumPortfolioExposure,omitempty"`
}

type PostPortfolioOptimizationMostDiversifiedRequestBody struct {
	Assets                 int64                                                           `json:"assets"`
	AssetsCovarianceMatrix [][]float64                                                     `json:"assetsCovarianceMatrix"`
	Constraints            *PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints `json:"constraints,omitempty"`
}

type PostPortfolioOptimizationMostDiversified200ApplicationJSON struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioOptimizationMostDiversifiedRequest struct {
	Request PostPortfolioOptimizationMostDiversifiedRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioOptimizationMostDiversifiedResponse struct {
	ContentType                                                      string
	PostPortfolioOptimizationMostDiversified200ApplicationJSONObject *PostPortfolioOptimizationMostDiversified200ApplicationJSON
	StatusCode                                                       int64
}

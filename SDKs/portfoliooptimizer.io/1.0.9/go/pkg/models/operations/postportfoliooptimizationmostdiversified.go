package operations

type PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints struct {
	AssetsGroups               [][]int64   `json:"assetsGroups"`
	AssetsGroupsMatrix         [][]float64 `json:"assetsGroupsMatrix"`
	MaximumAssetsGroupsWeights []float64   `json:"maximumAssetsGroupsWeights"`
	MaximumAssetsWeights       []float64   `json:"maximumAssetsWeights"`
	MaximumPortfolioExposure   *float64    `json:"maximumPortfolioExposure"`
	MinimumAssetsWeights       []float64   `json:"minimumAssetsWeights"`
	MinimumPortfolioExposure   *float64    `json:"minimumPortfolioExposure"`
}

type PostPortfolioOptimizationMostDiversifiedRequestBody struct {
	Assets                 int64                                                           `json:"assets"`
	AssetsCovarianceMatrix [][]float64                                                     `json:"assetsCovarianceMatrix"`
	Constraints            *PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints `json:"constraints"`
}

type PostPortfolioOptimizationMostDiversifiedRequest struct {
	Request PostPortfolioOptimizationMostDiversifiedRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioOptimizationMostDiversified200ApplicationJSON struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioOptimizationMostDiversifiedResponse struct {
	ContentType                                                      string
	PostPortfolioOptimizationMostDiversified200ApplicationJSONObject *PostPortfolioOptimizationMostDiversified200ApplicationJSON
	StatusCode                                                       int64
}

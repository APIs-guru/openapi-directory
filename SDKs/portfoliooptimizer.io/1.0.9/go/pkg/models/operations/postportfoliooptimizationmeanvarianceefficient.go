package operations

type PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints struct {
	AssetsGroups               [][]int64   `json:"assetsGroups"`
	AssetsGroupsMatrix         [][]float64 `json:"assetsGroupsMatrix"`
	MaximumAssetsGroupsWeights []float64   `json:"maximumAssetsGroupsWeights"`
	MaximumAssetsWeights       []float64   `json:"maximumAssetsWeights"`
	MaximumPortfolioExposure   *float64    `json:"maximumPortfolioExposure"`
	MinimumAssetsWeights       []float64   `json:"minimumAssetsWeights"`
	MinimumPortfolioExposure   *float64    `json:"minimumPortfolioExposure"`
	PortfolioReturn            *float64    `json:"portfolioReturn"`
	PortfolioVolatility        *float64    `json:"portfolioVolatility"`
	RiskTolerance              *float64    `json:"riskTolerance"`
}

type PostPortfolioOptimizationMeanVarianceEfficientRequestBody struct {
	Assets                 int64                                                                `json:"assets"`
	AssetsCovarianceMatrix [][]float64                                                          `json:"assetsCovarianceMatrix"`
	AssetsReturns          []float64                                                            `json:"assetsReturns"`
	Constraints            PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints `json:"constraints"`
}

type PostPortfolioOptimizationMeanVarianceEfficientRequest struct {
	Request PostPortfolioOptimizationMeanVarianceEfficientRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJSON struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioOptimizationMeanVarianceEfficientResponse struct {
	ContentType                                                            string
	PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJSONObject *PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJSON
	StatusCode                                                             int64
}

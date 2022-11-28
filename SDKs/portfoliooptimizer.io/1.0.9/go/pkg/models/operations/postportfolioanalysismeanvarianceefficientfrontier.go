package operations

type PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints struct {
	AssetsGroups               [][]int64   `json:"assetsGroups,omitempty"`
	AssetsGroupsMatrix         [][]float64 `json:"assetsGroupsMatrix,omitempty"`
	MaximumAssetsGroupsWeights []float64   `json:"maximumAssetsGroupsWeights,omitempty"`
	MaximumAssetsWeights       []float64   `json:"maximumAssetsWeights,omitempty"`
	MaximumPortfolioExposure   *float64    `json:"maximumPortfolioExposure,omitempty"`
	MinimumAssetsWeights       []float64   `json:"minimumAssetsWeights,omitempty"`
	MinimumPortfolioExposure   *float64    `json:"minimumPortfolioExposure,omitempty"`
}

type PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody struct {
	Assets                 int64                                                                     `json:"assets"`
	AssetsCovarianceMatrix [][]float64                                                               `json:"assetsCovarianceMatrix"`
	AssetsReturns          []float64                                                                 `json:"assetsReturns"`
	Constraints            *PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints `json:"constraints,omitempty"`
	Portfolios             *int64                                                                    `json:"portfolios,omitempty"`
}

type PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONPortfolios struct {
	AssetsWeights       []float64 `json:"assetsWeights"`
	PortfolioReturn     float64   `json:"portfolioReturn"`
	PortfolioVolatility float64   `json:"portfolioVolatility"`
}

type PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSON struct {
	Portfolios []PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest struct {
	Request PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse struct {
	ContentType                                                                string
	PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONObject *PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSON
	StatusCode                                                                 int64
}

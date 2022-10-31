package operations

type PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints struct {
	AssetsGroups               [][]int64   `json:"assetsGroups,omitempty"`
	AssetsGroupsMatrix         [][]float64 `json:"assetsGroupsMatrix,omitempty"`
	MaximumAssetsGroupsWeights []float64   `json:"maximumAssetsGroupsWeights,omitempty"`
	MaximumAssetsWeights       []float64   `json:"maximumAssetsWeights,omitempty"`
	MaximumPortfolioExposure   *float64    `json:"maximumPortfolioExposure,omitempty"`
	MinimumAssetsWeights       []float64   `json:"minimumAssetsWeights,omitempty"`
	MinimumPortfolioExposure   *float64    `json:"minimumPortfolioExposure,omitempty"`
}

type PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody struct {
	Assets                 int64                                                                           `json:"assets"`
	AssetsCovarianceMatrix [][]float64                                                                     `json:"assetsCovarianceMatrix"`
	AssetsReturns          []float64                                                                       `json:"assetsReturns"`
	Constraints            *PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints `json:"constraints,omitempty"`
	Portfolios             *int64                                                                          `json:"portfolios,omitempty"`
}

type PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest struct {
	Request PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSONPortfolios struct {
	AssetsWeights       []float64 `json:"assetsWeights"`
	PortfolioReturn     float64   `json:"portfolioReturn"`
	PortfolioVolatility float64   `json:"portfolioVolatility"`
}

type PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSON struct {
	Portfolios []PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse struct {
	ContentType                                                                      string
	PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSONObject *PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSON
	StatusCode                                                                       int64
}

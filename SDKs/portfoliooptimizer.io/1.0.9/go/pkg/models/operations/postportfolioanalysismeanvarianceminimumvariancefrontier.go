package operations

type PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints struct {
	AssetsGroups               [][]int64   `json:"assetsGroups"`
	AssetsGroupsMatrix         [][]float64 `json:"assetsGroupsMatrix"`
	MaximumAssetsGroupsWeights []float64   `json:"maximumAssetsGroupsWeights"`
	MaximumAssetsWeights       []float64   `json:"maximumAssetsWeights"`
	MaximumPortfolioExposure   *float64    `json:"maximumPortfolioExposure"`
	MinimumAssetsWeights       []float64   `json:"minimumAssetsWeights"`
	MinimumPortfolioExposure   *float64    `json:"minimumPortfolioExposure"`
}

type PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody struct {
	Assets                 int64                                                                           `json:"assets"`
	AssetsCovarianceMatrix [][]float64                                                                     `json:"assetsCovarianceMatrix"`
	AssetsReturns          []float64                                                                       `json:"assetsReturns"`
	Constraints            *PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints `json:"constraints"`
	Portfolios             *int64                                                                          `json:"portfolios"`
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

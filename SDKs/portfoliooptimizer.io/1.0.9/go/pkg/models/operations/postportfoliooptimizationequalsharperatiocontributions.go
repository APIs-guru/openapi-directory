package operations

type PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody struct {
	Assets                 int64       `json:"assets"`
	AssetsCovarianceMatrix [][]float64 `json:"assetsCovarianceMatrix"`
	AssetsReturns          []float64   `json:"assetsReturns"`
	RiskFreeRate           float64     `json:"riskFreeRate"`
}

type PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSON struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioOptimizationEqualSharpeRatioContributionsRequest struct {
	Request PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioOptimizationEqualSharpeRatioContributionsResponse struct {
	ContentType                                                                    string
	PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSONObject *PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSON
	StatusCode                                                                     int64
}

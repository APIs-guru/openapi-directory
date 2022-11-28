package operations

type PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioAnalysisContributionsRiskRequestBody struct {
	Assets                 int64                                                         `json:"assets"`
	AssetsCovarianceMatrix [][]float64                                                   `json:"assetsCovarianceMatrix"`
	AssetsGroups           [][]int64                                                     `json:"assetsGroups,omitempty"`
	Portfolios             []PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisContributionsRisk200ApplicationJSONPortfolios struct {
	AssetsGroupsRiskContributions []float64 `json:"assetsGroupsRiskContributions,omitempty"`
	AssetsRiskContributions       []float64 `json:"assetsRiskContributions"`
}

type PostPortfolioAnalysisContributionsRisk200ApplicationJSON struct {
	Portfolios []PostPortfolioAnalysisContributionsRisk200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisContributionsRiskRequest struct {
	Request PostPortfolioAnalysisContributionsRiskRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioAnalysisContributionsRiskResponse struct {
	ContentType                                                    string
	PostPortfolioAnalysisContributionsRisk200ApplicationJSONObject *PostPortfolioAnalysisContributionsRisk200ApplicationJSON
	StatusCode                                                     int64
}

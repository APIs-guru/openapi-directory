package operations

type PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioAnalysisContributionsReturnRequestBody struct {
	Assets        int64                                                           `json:"assets"`
	AssetsGroups  [][]int64                                                       `json:"assetsGroups,omitempty"`
	AssetsReturns []float64                                                       `json:"assetsReturns"`
	Portfolios    []PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisContributionsReturn200ApplicationJSONPortfolios struct {
	AssetsGroupsReturnContributions []float64 `json:"assetsGroupsReturnContributions,omitempty"`
	AssetsReturnContributions       []float64 `json:"assetsReturnContributions"`
}

type PostPortfolioAnalysisContributionsReturn200ApplicationJSON struct {
	Portfolios []PostPortfolioAnalysisContributionsReturn200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisContributionsReturnRequest struct {
	Request PostPortfolioAnalysisContributionsReturnRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioAnalysisContributionsReturnResponse struct {
	ContentType                                                      string
	PostPortfolioAnalysisContributionsReturn200ApplicationJSONObject *PostPortfolioAnalysisContributionsReturn200ApplicationJSON
	StatusCode                                                       int64
}

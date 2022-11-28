package operations

type PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioAnalysisDiversificationRatioRequestBody struct {
	Assets                 int64                                                            `json:"assets"`
	AssetsCovarianceMatrix [][]float64                                                      `json:"assetsCovarianceMatrix"`
	Portfolios             []PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisDiversificationRatio200ApplicationJSONPortfolios struct {
	PortfolioDiversificationRatio float64 `json:"portfolioDiversificationRatio"`
}

type PostPortfolioAnalysisDiversificationRatio200ApplicationJSON struct {
	Portfolios []PostPortfolioAnalysisDiversificationRatio200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisDiversificationRatioRequest struct {
	Request PostPortfolioAnalysisDiversificationRatioRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioAnalysisDiversificationRatioResponse struct {
	ContentType                                                       string
	PostPortfolioAnalysisDiversificationRatio200ApplicationJSONObject *PostPortfolioAnalysisDiversificationRatio200ApplicationJSON
	StatusCode                                                        int64
}

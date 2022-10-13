package operations

type PostPortfolioAnalysisBetaRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostPortfolioAnalysisBeta200ApplicationJSONPortfolios struct {
	PortfolioBeta float64 `json:"portfolioBeta"`
}

type PostPortfolioAnalysisBeta200ApplicationJSON struct {
	Portfolios []PostPortfolioAnalysisBeta200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisBetaResponse struct {
	ContentType                                       string
	PostPortfolioAnalysisBeta200ApplicationJSONObject *PostPortfolioAnalysisBeta200ApplicationJSON
	StatusCode                                        int64
}

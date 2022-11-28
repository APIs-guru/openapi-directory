package operations

type PostPortfolioAnalysisVolatility200ApplicationJSONPortfolios struct {
	PortfolioVolatility float64 `json:"portfolioVolatility"`
}

type PostPortfolioAnalysisVolatility200ApplicationJSON struct {
	Portfolios []PostPortfolioAnalysisVolatility200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisVolatilityRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostPortfolioAnalysisVolatilityResponse struct {
	ContentType                                             string
	PostPortfolioAnalysisVolatility200ApplicationJSONObject *PostPortfolioAnalysisVolatility200ApplicationJSON
	StatusCode                                              int64
}

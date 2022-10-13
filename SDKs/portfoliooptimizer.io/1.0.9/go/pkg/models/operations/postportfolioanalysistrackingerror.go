package operations

type PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios struct {
	PortfolioReturns []float64 `json:"portfolioReturns"`
}

type PostPortfolioAnalysisTrackingErrorRequestBody struct {
	BenchmarkReturns []float64                                                 `json:"benchmarkReturns"`
	Portfolios       []PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisTrackingErrorRequest struct {
	Request PostPortfolioAnalysisTrackingErrorRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioAnalysisTrackingError200ApplicationJSONPortfolios struct {
	PortfolioTrackingError float64 `json:"portfolioTrackingError"`
}

type PostPortfolioAnalysisTrackingError200ApplicationJSON struct {
	Portfolios []PostPortfolioAnalysisTrackingError200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisTrackingErrorResponse struct {
	ContentType                                                string
	PostPortfolioAnalysisTrackingError200ApplicationJSONObject *PostPortfolioAnalysisTrackingError200ApplicationJSON
	StatusCode                                                 int64
}

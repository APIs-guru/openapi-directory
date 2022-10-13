package operations

type PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios struct {
	PortfolioValues []float64 `json:"portfolioValues"`
}

type PostPortfolioAnalysisReturnsAverageRequestBody struct {
	Portfolios []PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisReturnsAverageRequest struct {
	Request PostPortfolioAnalysisReturnsAverageRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioAnalysisReturnsAverage200ApplicationJSONPortfolios struct {
	PortfolioAverageReturn float64 `json:"portfolioAverageReturn"`
}

type PostPortfolioAnalysisReturnsAverage200ApplicationJSON struct {
	Portfolios []PostPortfolioAnalysisReturnsAverage200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisReturnsAverageResponse struct {
	ContentType                                                 string
	PostPortfolioAnalysisReturnsAverage200ApplicationJSONObject *PostPortfolioAnalysisReturnsAverage200ApplicationJSON
	StatusCode                                                  int64
}

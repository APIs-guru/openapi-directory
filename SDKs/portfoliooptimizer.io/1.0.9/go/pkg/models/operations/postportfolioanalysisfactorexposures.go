package operations

type PostPortfolioAnalysisFactorExposuresRequestBodyFactors struct {
	FactorReturns []float64 `json:"factorReturns"`
}

type PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios struct {
	PortfolioReturns []float64 `json:"portfolioReturns"`
}

type PostPortfolioAnalysisFactorExposuresRequestBody struct {
	Factors    []PostPortfolioAnalysisFactorExposuresRequestBodyFactors    `json:"factors,omitempty"`
	Portfolios []PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisFactorExposures200ApplicationJSONPortfolios struct {
	PortfolioAlpha    float64   `json:"portfolioAlpha"`
	PortfolioBetas    []float64 `json:"portfolioBetas"`
	PortfolioRSquared float64   `json:"portfolioRSquared"`
}

type PostPortfolioAnalysisFactorExposures200ApplicationJSON struct {
	Portfolios []PostPortfolioAnalysisFactorExposures200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisFactorExposuresRequest struct {
	Request PostPortfolioAnalysisFactorExposuresRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioAnalysisFactorExposuresResponse struct {
	ContentType                                                  string
	PostPortfolioAnalysisFactorExposures200ApplicationJSONObject *PostPortfolioAnalysisFactorExposures200ApplicationJSON
	StatusCode                                                   int64
}

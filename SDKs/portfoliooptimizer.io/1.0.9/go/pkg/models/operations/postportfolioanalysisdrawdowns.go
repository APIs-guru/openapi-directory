package operations

type PostPortfolioAnalysisDrawdownsRequestBodyPortfolios struct {
	PortfolioValues []float64 `json:"portfolioValues"`
}

type PostPortfolioAnalysisDrawdownsRequestBody struct {
	Portfolios []PostPortfolioAnalysisDrawdownsRequestBodyPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisDrawdownsRequest struct {
	Request PostPortfolioAnalysisDrawdownsRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfoliosPortfolioWorstDrawdowns struct {
	DrawdownBottom int64   `json:"drawdownBottom"`
	DrawdownDepth  float64 `json:"drawdownDepth"`
	DrawdownEnd    int64   `json:"drawdownEnd"`
	DrawdownStart  int64   `json:"drawdownStart"`
}

type PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfolios struct {
	PortfolioDrawdowns      []float64                                                                           `json:"portfolioDrawdowns"`
	PortfolioWorstDrawdowns []PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfoliosPortfolioWorstDrawdowns `json:"portfolioWorstDrawdowns"`
}

type PostPortfolioAnalysisDrawdowns200ApplicationJSON struct {
	Portfolios []PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisDrawdownsResponse struct {
	ContentType                                            string
	PostPortfolioAnalysisDrawdowns200ApplicationJSONObject *PostPortfolioAnalysisDrawdowns200ApplicationJSON
	StatusCode                                             int64
}

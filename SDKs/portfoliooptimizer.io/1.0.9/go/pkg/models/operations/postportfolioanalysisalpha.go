package operations



type PostPortfolioAnalysisAlphaRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostPortfolioAnalysisAlpha200ApplicationJSONPortfolios struct {
    PortfolioAlpha float64 `json:"portfolioAlpha"`
    
}

type PostPortfolioAnalysisAlpha200ApplicationJSON struct {
    Portfolios []PostPortfolioAnalysisAlpha200ApplicationJSONPortfolios `json:"portfolios"`
    
}

type PostPortfolioAnalysisAlphaResponse struct {
    ContentType string 
    PostPortfolioAnalysisAlpha200ApplicationJSONObject *PostPortfolioAnalysisAlpha200ApplicationJSON 
    StatusCode int64 
    
}


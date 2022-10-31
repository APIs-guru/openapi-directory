package operations



type PostPortfolioAnalysisSharpeRatioRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostPortfolioAnalysisSharpeRatio200ApplicationJSONPortfolios struct {
    PortfolioSharpeRatio float64 `json:"portfolioSharpeRatio"`
    
}

type PostPortfolioAnalysisSharpeRatio200ApplicationJSON struct {
    Portfolios []PostPortfolioAnalysisSharpeRatio200ApplicationJSONPortfolios `json:"portfolios"`
    
}

type PostPortfolioAnalysisSharpeRatioResponse struct {
    ContentType string 
    PostPortfolioAnalysisSharpeRatio200ApplicationJSONObject *PostPortfolioAnalysisSharpeRatio200ApplicationJSON 
    StatusCode int64 
    
}


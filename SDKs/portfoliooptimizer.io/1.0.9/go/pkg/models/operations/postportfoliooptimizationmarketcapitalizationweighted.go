package operations

type PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody struct {
	Assets                      int64     `json:"assets"`
	AssetsMarketCapitalizations []float64 `json:"assetsMarketCapitalizations"`
}

type PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSON struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioOptimizationMarketCapitalizationWeightedRequest struct {
	Request PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioOptimizationMarketCapitalizationWeightedResponse struct {
	ContentType                                                                   string
	PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSONObject *PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSON
	StatusCode                                                                    int64
}

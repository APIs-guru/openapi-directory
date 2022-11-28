package operations

type PostPortfolioOptimizationInverseVolatilityWeightedRequestBody struct {
	Assets             int64     `json:"assets"`
	AssetsVolatilities []float64 `json:"assetsVolatilities"`
}

type PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSON struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioOptimizationInverseVolatilityWeightedRequest struct {
	Request PostPortfolioOptimizationInverseVolatilityWeightedRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioOptimizationInverseVolatilityWeightedResponse struct {
	ContentType                                                                string
	PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSONObject *PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSON
	StatusCode                                                                 int64
}

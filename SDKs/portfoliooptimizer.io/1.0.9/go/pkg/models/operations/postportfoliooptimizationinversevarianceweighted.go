package operations

type PostPortfolioOptimizationInverseVarianceWeightedRequestBody struct {
	Assets          int64     `json:"assets"`
	AssetsVariances []float64 `json:"assetsVariances"`
}

type PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSON struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioOptimizationInverseVarianceWeightedRequest struct {
	Request PostPortfolioOptimizationInverseVarianceWeightedRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioOptimizationInverseVarianceWeightedResponse struct {
	ContentType                                                              string
	PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSONObject *PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSON
	StatusCode                                                               int64
}

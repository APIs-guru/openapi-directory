package operations

type PostPortfolioConstructionRandomRequestBodyConstraints struct {
	MaximumAssetsWeights     []float64 `json:"maximumAssetsWeights"`
	MaximumPortfolioExposure *float64  `json:"maximumPortfolioExposure"`
	MinimumAssetsWeights     []float64 `json:"minimumAssetsWeights"`
	MinimumPortfolioExposure *float64  `json:"minimumPortfolioExposure"`
}

type PostPortfolioConstructionRandomRequestBody struct {
	Assets      int64                                                  `json:"assets"`
	Constraints *PostPortfolioConstructionRandomRequestBodyConstraints `json:"constraints"`
	Portfolios  *int64                                                 `json:"portfolios"`
}

type PostPortfolioConstructionRandomRequest struct {
	Request PostPortfolioConstructionRandomRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioConstructionRandom200ApplicationJSONPortfolios struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioConstructionRandom200ApplicationJSON struct {
	Portfolios []PostPortfolioConstructionRandom200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioConstructionRandomResponse struct {
	ContentType                                             string
	PostPortfolioConstructionRandom200ApplicationJSONObject *PostPortfolioConstructionRandom200ApplicationJSON
	StatusCode                                              int64
}

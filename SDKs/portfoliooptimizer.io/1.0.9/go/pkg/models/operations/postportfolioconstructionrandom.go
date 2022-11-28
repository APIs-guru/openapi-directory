package operations

type PostPortfolioConstructionRandomRequestBodyConstraints struct {
	MaximumAssetsWeights     []float64 `json:"maximumAssetsWeights,omitempty"`
	MaximumPortfolioExposure *float64  `json:"maximumPortfolioExposure,omitempty"`
	MinimumAssetsWeights     []float64 `json:"minimumAssetsWeights,omitempty"`
	MinimumPortfolioExposure *float64  `json:"minimumPortfolioExposure,omitempty"`
}

type PostPortfolioConstructionRandomRequestBody struct {
	Assets      int64                                                  `json:"assets"`
	Constraints *PostPortfolioConstructionRandomRequestBodyConstraints `json:"constraints,omitempty"`
	Portfolios  *int64                                                 `json:"portfolios,omitempty"`
}

type PostPortfolioConstructionRandom200ApplicationJSONPortfolios struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioConstructionRandom200ApplicationJSON struct {
	Portfolios []PostPortfolioConstructionRandom200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioConstructionRandomRequest struct {
	Request PostPortfolioConstructionRandomRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioConstructionRandomResponse struct {
	ContentType                                             string
	PostPortfolioConstructionRandom200ApplicationJSONObject *PostPortfolioConstructionRandom200ApplicationJSON
	StatusCode                                              int64
}

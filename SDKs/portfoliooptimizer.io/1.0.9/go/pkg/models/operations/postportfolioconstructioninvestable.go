package operations

type PostPortfolioConstructionInvestableRequestBody struct {
	Assets                      int64     `json:"assets"`
	AssetsGroups                [][]int64 `json:"assetsGroups,omitempty"`
	AssetsGroupsWeights         []float64 `json:"assetsGroupsWeights,omitempty"`
	AssetsMinimumNotionalValues []float64 `json:"assetsMinimumNotionalValues,omitempty"`
	AssetsMinimumPositions      []float64 `json:"assetsMinimumPositions,omitempty"`
	AssetsPrices                []float64 `json:"assetsPrices"`
	AssetsSizeLots              []float64 `json:"assetsSizeLots,omitempty"`
	AssetsWeights               []float64 `json:"assetsWeights,omitempty"`
	MaximumAssetsGroupsWeights  []float64 `json:"maximumAssetsGroupsWeights,omitempty"`
	PortfolioValue              float64   `json:"portfolioValue"`
}

type PostPortfolioConstructionInvestable200ApplicationJSON struct {
	AssetsPositions []float64 `json:"assetsPositions"`
	AssetsWeights   []float64 `json:"assetsWeights"`
}

type PostPortfolioConstructionInvestableRequest struct {
	Request PostPortfolioConstructionInvestableRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioConstructionInvestableResponse struct {
	ContentType                                                 string
	PostPortfolioConstructionInvestable200ApplicationJSONObject *PostPortfolioConstructionInvestable200ApplicationJSON
	StatusCode                                                  int64
}

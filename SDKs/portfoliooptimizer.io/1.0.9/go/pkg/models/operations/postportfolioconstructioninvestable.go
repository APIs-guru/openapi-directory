package operations

type PostPortfolioConstructionInvestableRequestBody struct {
	Assets                      int64     `json:"assets"`
	AssetsGroups                [][]int64 `json:"assetsGroups"`
	AssetsGroupsWeights         []float64 `json:"assetsGroupsWeights"`
	AssetsMinimumNotionalValues []float64 `json:"assetsMinimumNotionalValues"`
	AssetsMinimumPositions      []float64 `json:"assetsMinimumPositions"`
	AssetsPrices                []float64 `json:"assetsPrices"`
	AssetsSizeLots              []float64 `json:"assetsSizeLots"`
	AssetsWeights               []float64 `json:"assetsWeights"`
	MaximumAssetsGroupsWeights  []float64 `json:"maximumAssetsGroupsWeights"`
	PortfolioValue              float64   `json:"portfolioValue"`
}

type PostPortfolioConstructionInvestableRequest struct {
	Request PostPortfolioConstructionInvestableRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioConstructionInvestable200ApplicationJSON struct {
	AssetsPositions []float64 `json:"assetsPositions"`
	AssetsWeights   []float64 `json:"assetsWeights"`
}

type PostPortfolioConstructionInvestableResponse struct {
	ContentType                                                 string
	PostPortfolioConstructionInvestable200ApplicationJSONObject *PostPortfolioConstructionInvestable200ApplicationJSON
	StatusCode                                                  int64
}

package operations

type PostPortfolioConstructionMimickingRequestBodyAssets struct {
	AssetReturns []float64 `json:"assetReturns"`
}

type PostPortfolioConstructionMimickingRequestBodyConstraints struct {
	AssetsGroups               [][]int64   `json:"assetsGroups"`
	AssetsGroupsMatrix         [][]float64 `json:"assetsGroupsMatrix"`
	MaximumAssetsGroupsWeights []float64   `json:"maximumAssetsGroupsWeights"`
	MaximumAssetsWeights       []float64   `json:"maximumAssetsWeights"`
	MaximumPortfolioExposure   *float64    `json:"maximumPortfolioExposure"`
	MinimumAssetsWeights       []float64   `json:"minimumAssetsWeights"`
	MinimumPortfolioExposure   *float64    `json:"minimumPortfolioExposure"`
}

type PostPortfolioConstructionMimickingRequestBody struct {
	Assets           []PostPortfolioConstructionMimickingRequestBodyAssets     `json:"assets"`
	BenchmarkReturns []float64                                                 `json:"benchmarkReturns"`
	Constraints      *PostPortfolioConstructionMimickingRequestBodyConstraints `json:"constraints"`
}

type PostPortfolioConstructionMimickingRequest struct {
	Request PostPortfolioConstructionMimickingRequestBody `request:"mediaType=application/json"`
}

type PostPortfolioConstructionMimicking200ApplicationJSON struct {
	AssetsWeights []float64 `json:"assetsWeights"`
}

type PostPortfolioConstructionMimickingResponse struct {
	ContentType                                                string
	PostPortfolioConstructionMimicking200ApplicationJSONObject *PostPortfolioConstructionMimicking200ApplicationJSON
	StatusCode                                                 int64
}

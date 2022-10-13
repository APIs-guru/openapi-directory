package operations

type PostAssetsReturnsAverageRequestBodyAssets struct {
	AssetReturns []float64 `json:"assetReturns"`
}

type PostAssetsReturnsAverageRequestBody struct {
	Assets []PostAssetsReturnsAverageRequestBodyAssets `json:"assets"`
}

type PostAssetsReturnsAverageRequest struct {
	Request PostAssetsReturnsAverageRequestBody `request:"mediaType=application/json"`
}

type PostAssetsReturnsAverage200ApplicationJSONAssets struct {
	AssetAverageReturn float64 `json:"assetAverageReturn"`
}

type PostAssetsReturnsAverage200ApplicationJSON struct {
	Assets []PostAssetsReturnsAverage200ApplicationJSONAssets `json:"assets"`
}

type PostAssetsReturnsAverageResponse struct {
	ContentType                                      string
	PostAssetsReturnsAverage200ApplicationJSONObject *PostAssetsReturnsAverage200ApplicationJSON
	StatusCode                                       int64
}

package operations

type PostAssetsVarianceSampleRequestBodyAssets struct {
	AssetReturns []float64 `json:"assetReturns"`
}

type PostAssetsVarianceSampleRequestBody struct {
	Assets []PostAssetsVarianceSampleRequestBodyAssets `json:"assets"`
}

type PostAssetsVarianceSample200ApplicationJSONAssets struct {
	AssetVariance float64 `json:"assetVariance"`
}

type PostAssetsVarianceSample200ApplicationJSON struct {
	Assets []PostAssetsVarianceSample200ApplicationJSONAssets `json:"assets"`
}

type PostAssetsVarianceSampleRequest struct {
	Request PostAssetsVarianceSampleRequestBody `request:"mediaType=application/json"`
}

type PostAssetsVarianceSampleResponse struct {
	ContentType                                      string
	PostAssetsVarianceSample200ApplicationJSONObject *PostAssetsVarianceSample200ApplicationJSON
	StatusCode                                       int64
}

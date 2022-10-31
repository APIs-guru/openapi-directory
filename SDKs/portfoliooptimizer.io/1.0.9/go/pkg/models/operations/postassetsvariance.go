package operations

type PostAssetsVarianceRequestBody1Assets struct {
	AssetReturns []float64 `json:"assetReturns"`
}

type PostAssetsVarianceRequestBody1 struct {
	Assets []PostAssetsVarianceRequestBody1Assets `json:"assets"`
}

type PostAssetsVarianceRequestBody2 struct {
	Assets                 int64       `json:"assets"`
	AssetsCovarianceMatrix [][]float64 `json:"assetsCovarianceMatrix"`
}

type PostAssetsVarianceRequestBody3Assets struct {
	AssetVolatility float64 `json:"assetVolatility"`
}

type PostAssetsVarianceRequestBody3 struct {
	Assets []PostAssetsVarianceRequestBody3Assets `json:"assets"`
}

type PostAssetsVarianceRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type PostAssetsVariance200ApplicationJSONAssets struct {
	AssetVariance float64 `json:"assetVariance"`
}

type PostAssetsVariance200ApplicationJSON struct {
	Assets []PostAssetsVariance200ApplicationJSONAssets `json:"assets"`
}

type PostAssetsVarianceResponse struct {
	ContentType                                string
	PostAssetsVariance200ApplicationJSONObject *PostAssetsVariance200ApplicationJSON
	StatusCode                                 int64
}

package operations

type PostAssetsVolatilitySampleRequestBodyAssets struct {
	AssetReturns []float64 `json:"assetReturns"`
}

type PostAssetsVolatilitySampleRequestBody struct {
	Assets []PostAssetsVolatilitySampleRequestBodyAssets `json:"assets"`
}

type PostAssetsVolatilitySampleRequest struct {
	Request PostAssetsVolatilitySampleRequestBody `request:"mediaType=application/json"`
}

type PostAssetsVolatilitySample200ApplicationJSONAssets struct {
	AssetVolatility float64 `json:"assetVolatility"`
}

type PostAssetsVolatilitySample200ApplicationJSON struct {
	Assets []PostAssetsVolatilitySample200ApplicationJSONAssets `json:"assets"`
}

type PostAssetsVolatilitySampleResponse struct {
	ContentType                                        string
	PostAssetsVolatilitySample200ApplicationJSONObject *PostAssetsVolatilitySample200ApplicationJSON
	StatusCode                                         int64
}

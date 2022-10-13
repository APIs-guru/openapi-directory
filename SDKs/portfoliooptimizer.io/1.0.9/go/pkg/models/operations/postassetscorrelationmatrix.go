package operations

type PostAssetsCorrelationMatrixRequestBody1Assets struct {
	AssetReturns []float64 `json:"assetReturns"`
}

type PostAssetsCorrelationMatrixRequestBody1 struct {
	Assets []PostAssetsCorrelationMatrixRequestBody1Assets `json:"assets"`
}

type PostAssetsCorrelationMatrixRequestBody2 struct {
	Assets                 int64       `json:"assets"`
	AssetsCovarianceMatrix [][]float64 `json:"assetsCovarianceMatrix"`
}

type PostAssetsCorrelationMatrixRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type PostAssetsCorrelationMatrix200ApplicationJSON struct {
	AssetsCorrelationMatrix [][]float64 `json:"assetsCorrelationMatrix"`
}

type PostAssetsCorrelationMatrixResponse struct {
	ContentType                                         string
	PostAssetsCorrelationMatrix200ApplicationJSONObject *PostAssetsCorrelationMatrix200ApplicationJSON
	StatusCode                                          int64
}

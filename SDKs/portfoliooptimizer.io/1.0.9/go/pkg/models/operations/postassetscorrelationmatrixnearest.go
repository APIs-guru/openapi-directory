package operations

type PostAssetsCorrelationMatrixNearestRequestBody struct {
	Assets                             int64       `json:"assets"`
	AssetsApproximateCorrelationMatrix [][]float64 `json:"assetsApproximateCorrelationMatrix"`
	AssetsFixedCorrelations            [][]int64   `json:"assetsFixedCorrelations"`
}

type PostAssetsCorrelationMatrixNearestRequest struct {
	Request PostAssetsCorrelationMatrixNearestRequestBody `request:"mediaType=application/json"`
}

type PostAssetsCorrelationMatrixNearest200ApplicationJSON struct {
	AssetsCorrelationMatrix [][]float64 `json:"assetsCorrelationMatrix"`
}

type PostAssetsCorrelationMatrixNearestResponse struct {
	ContentType                                                string
	PostAssetsCorrelationMatrixNearest200ApplicationJSONObject *PostAssetsCorrelationMatrixNearest200ApplicationJSON
	StatusCode                                                 int64
}

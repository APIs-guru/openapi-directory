package operations

type PostAssetsCorrelationMatrixNearestRequestBody struct {
	Assets                             int64       `json:"assets"`
	AssetsApproximateCorrelationMatrix [][]float64 `json:"assetsApproximateCorrelationMatrix"`
	AssetsFixedCorrelations            [][]int64   `json:"assetsFixedCorrelations,omitempty"`
}

type PostAssetsCorrelationMatrixNearest200ApplicationJSON struct {
	AssetsCorrelationMatrix [][]float64 `json:"assetsCorrelationMatrix"`
}

type PostAssetsCorrelationMatrixNearestRequest struct {
	Request PostAssetsCorrelationMatrixNearestRequestBody `request:"mediaType=application/json"`
}

type PostAssetsCorrelationMatrixNearestResponse struct {
	ContentType                                                string
	PostAssetsCorrelationMatrixNearest200ApplicationJSONObject *PostAssetsCorrelationMatrixNearest200ApplicationJSON
	StatusCode                                                 int64
}

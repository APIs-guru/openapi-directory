package operations

type PostAssetsCovarianceMatrixSampleRequestBodyAssets struct {
	AssetReturns []float64 `json:"assetReturns"`
}

type PostAssetsCovarianceMatrixSampleRequestBody struct {
	Assets []PostAssetsCovarianceMatrixSampleRequestBodyAssets `json:"assets"`
}

type PostAssetsCovarianceMatrixSample200ApplicationJSON struct {
	AssetsCovarianceMatrix [][]float64 `json:"assetsCovarianceMatrix"`
}

type PostAssetsCovarianceMatrixSampleRequest struct {
	Request PostAssetsCovarianceMatrixSampleRequestBody `request:"mediaType=application/json"`
}

type PostAssetsCovarianceMatrixSampleResponse struct {
	ContentType                                              string
	PostAssetsCovarianceMatrixSample200ApplicationJSONObject *PostAssetsCovarianceMatrixSample200ApplicationJSON
	StatusCode                                               int64
}

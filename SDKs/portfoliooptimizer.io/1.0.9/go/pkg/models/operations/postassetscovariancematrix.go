package operations

type PostAssetsCovarianceMatrixRequestBody1Assets struct {
	AssetReturns []float64 `json:"assetReturns"`
}

type PostAssetsCovarianceMatrixRequestBody1 struct {
	Assets []PostAssetsCovarianceMatrixRequestBody1Assets `json:"assets"`
}

type PostAssetsCovarianceMatrixRequestBody2 struct {
	Assets                  int64       `json:"assets"`
	AssetsCorrelationMatrix [][]float64 `json:"assetsCorrelationMatrix"`
	AssetsVariances         []float64   `json:"assetsVariances"`
}

type PostAssetsCovarianceMatrixRequestBody3 struct {
	Assets                  int64       `json:"assets"`
	AssetsCorrelationMatrix [][]float64 `json:"assetsCorrelationMatrix"`
	AssetsVolatilities      []float64   `json:"assetsVolatilities"`
}

type PostAssetsCovarianceMatrix200ApplicationJSON struct {
	AssetsCovarianceMatrix [][]float64 `json:"assetsCovarianceMatrix"`
}

type PostAssetsCovarianceMatrixRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type PostAssetsCovarianceMatrixResponse struct {
	ContentType                                        string
	PostAssetsCovarianceMatrix200ApplicationJSONObject *PostAssetsCovarianceMatrix200ApplicationJSON
	StatusCode                                         int64
}

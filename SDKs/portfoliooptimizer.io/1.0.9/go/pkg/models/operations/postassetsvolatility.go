package operations



type PostAssetsVolatilityRequestBody1Assets struct {
    AssetReturns []float64 `json:"assetReturns"`
    
}

type PostAssetsVolatilityRequestBody1 struct {
    Assets []PostAssetsVolatilityRequestBody1Assets `json:"assets"`
    
}

type PostAssetsVolatilityRequestBody2 struct {
    Assets int64 `json:"assets"`
    AssetsCovarianceMatrix [][]float64 `json:"assetsCovarianceMatrix"`
    
}

type PostAssetsVolatilityRequestBody3Assets struct {
    AssetVariance float64 `json:"assetVariance"`
    
}

type PostAssetsVolatilityRequestBody3 struct {
    Assets []PostAssetsVolatilityRequestBody3Assets `json:"assets"`
    
}

type PostAssetsVolatilityRequest struct {
    Request interface{} `request:"mediaType=application/json"`
    
}

type PostAssetsVolatility200ApplicationJSONAssets struct {
    AssetVolatility float64 `json:"assetVolatility"`
    
}

type PostAssetsVolatility200ApplicationJSON struct {
    Assets []PostAssetsVolatility200ApplicationJSONAssets `json:"assets"`
    
}

type PostAssetsVolatilityResponse struct {
    ContentType string 
    PostAssetsVolatility200ApplicationJSONObject *PostAssetsVolatility200ApplicationJSON 
    StatusCode int64 
    
}


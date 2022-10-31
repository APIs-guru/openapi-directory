package operations



type PostAssetsReturnsRequestBodyAssets struct {
    AssetPrices []float64 `json:"assetPrices"`
    
}

type PostAssetsReturnsRequestBody struct {
    Assets []PostAssetsReturnsRequestBodyAssets `json:"assets"`
    
}

type PostAssetsReturnsRequest struct {
    Request PostAssetsReturnsRequestBody `request:"mediaType=application/json"`
    
}

type PostAssetsReturns200ApplicationJSONAssets struct {
    AssetReturns []float64 `json:"assetReturns"`
    
}

type PostAssetsReturns200ApplicationJSON struct {
    Assets []PostAssetsReturns200ApplicationJSONAssets `json:"assets"`
    
}

type PostAssetsReturnsResponse struct {
    ContentType string 
    PostAssetsReturns200ApplicationJSONObject *PostAssetsReturns200ApplicationJSON 
    StatusCode int64 
    
}


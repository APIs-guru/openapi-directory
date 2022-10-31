package operations



type GetAPIV2ListFederationsHeaders struct {
    XRapidAPIKey *string `header:"style=simple,explode=false,name=X-RapidApi-Key"`
    
}

type GetAPIV2ListFederationsRequest struct {
    Headers GetAPIV2ListFederationsHeaders 
    
}

type GetAPIV2ListFederations200ApplicationJSON struct {
    Data []string `json:"data,omitempty"`
    
}

type GetAPIV2ListFederations404ApplicationJSON struct {
    Errors map[string]interface{} `json:"errors,omitempty"`
    
}

type GetAPIV2ListFederationsResponse struct {
    ContentType string 
    GetAPIV2ListFederations200ApplicationJSONObject *GetAPIV2ListFederations200ApplicationJSON 
    GetAPIV2ListFederations404ApplicationJSONObject *GetAPIV2ListFederations404ApplicationJSON 
    StatusCode int64 
    
}


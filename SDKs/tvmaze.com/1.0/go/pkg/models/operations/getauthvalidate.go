package operations



type GetAuthValidate200ApplicationJSON struct {
    Premium *int64 `json:"premium,omitempty"`
    
}

type GetAuthValidateResponse struct {
    ContentType string 
    GetAuthValidate200ApplicationJSONObject *GetAuthValidate200ApplicationJSON 
    StatusCode int64 
    
}


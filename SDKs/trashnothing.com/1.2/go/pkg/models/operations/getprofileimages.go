package operations



type GetProfileImages200ApplicationJSON struct {
    Image *string `json:"image,omitempty"`
    Source *string `json:"source,omitempty"`
    
}

type GetProfileImagesResponse struct {
    ContentType string 
    StatusCode int64 
    GetProfileImages200ApplicationJSONObjects []GetProfileImages200ApplicationJSON 
    
}


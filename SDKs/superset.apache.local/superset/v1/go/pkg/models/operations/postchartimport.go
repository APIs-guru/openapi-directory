package operations

import (
"openapi/pkg/models/shared")

type PostChartImportRequestBodyFormData struct {
    Content []byte `multipartForm:"content"`
    FormData string `multipartForm:"name=formData"`
    
}

type PostChartImportRequestBody struct {
    FormData *PostChartImportRequestBodyFormData `multipartForm:"file"`
    Overwrite *bool `multipartForm:"name=overwrite"`
    Passwords *string `multipartForm:"name=passwords"`
    
}

type PostChartImportSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type PostChartImportRequest struct {
    Request PostChartImportRequestBody `request:"mediaType=multipart/form-data"`
    Security PostChartImportSecurity 
    
}

type PostChartImport200ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PostChartImport400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PostChartImport401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PostChartImport422ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PostChartImport500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PostChartImportResponse struct {
    ContentType string 
    PostChartImport200ApplicationJSONObject *PostChartImport200ApplicationJSON 
    PostChartImport400ApplicationJSONObject *PostChartImport400ApplicationJSON 
    PostChartImport401ApplicationJSONObject *PostChartImport401ApplicationJSON 
    PostChartImport422ApplicationJSONObject *PostChartImport422ApplicationJSON 
    PostChartImport500ApplicationJSONObject *PostChartImport500ApplicationJSON 
    StatusCode int64 
    
}


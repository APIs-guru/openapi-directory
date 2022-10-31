package operations

import (
"openapi/pkg/models/shared")

type GetSecurityCsrfTokenSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type GetSecurityCsrfTokenRequest struct {
    Security GetSecurityCsrfTokenSecurity 
    
}

type GetSecurityCsrfToken200ApplicationJSON struct {
    Result *string `json:"result,omitempty"`
    
}

type GetSecurityCsrfToken401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetSecurityCsrfToken500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetSecurityCsrfTokenResponse struct {
    ContentType string 
    GetSecurityCsrfToken200ApplicationJSONObject *GetSecurityCsrfToken200ApplicationJSON 
    GetSecurityCsrfToken401ApplicationJSONObject *GetSecurityCsrfToken401ApplicationJSON 
    GetSecurityCsrfToken500ApplicationJSONObject *GetSecurityCsrfToken500ApplicationJSON 
    StatusCode int64 
    
}


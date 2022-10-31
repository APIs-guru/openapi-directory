package operations

import (
"openapi/pkg/models/shared")

type AuthLoginRequest struct {
    Request shared.LoginDto `request:"mediaType=application/json"`
    
}

type AuthLoginResponse struct {
    AuthLogin200ApplicationOctetStreamBinaryString []byte 
    ContentType string 
    StatusCode int64 
    
}


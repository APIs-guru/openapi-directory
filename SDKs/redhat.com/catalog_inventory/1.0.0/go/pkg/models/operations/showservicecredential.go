package operations

import (
"openapi/pkg/models/shared")

type ShowServiceCredentialPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ShowServiceCredentialRequest struct {
    PathParams ShowServiceCredentialPathParams 
    
}

type ShowServiceCredentialResponse struct {
    ContentType string 
    ErrorNotFound *shared.ErrorNotFound 
    ServiceCredential *shared.ServiceCredential 
    StatusCode int64 
    
}


package operations

import (
"openapi/pkg/models/shared")

type RetrieveDisputePathParams struct {
    DisputeID string `pathParam:"style=simple,explode=false,name=dispute_id"`
    
}

type RetrieveDisputeSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveDisputeRequest struct {
    PathParams RetrieveDisputePathParams 
    Security RetrieveDisputeSecurity 
    
}

type RetrieveDisputeResponse struct {
    ContentType string 
    RetrieveDisputeResponse *shared.RetrieveDisputeResponse 
    StatusCode int64 
    
}


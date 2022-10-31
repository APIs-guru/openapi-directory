package operations

import (
"openapi/pkg/models/shared")

type CreateDisputeEvidenceTextPathParams struct {
    DisputeID string `pathParam:"style=simple,explode=false,name=dispute_id"`
    
}

type CreateDisputeEvidenceTextSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateDisputeEvidenceTextRequest struct {
    PathParams CreateDisputeEvidenceTextPathParams 
    Request shared.CreateDisputeEvidenceTextRequest `request:"mediaType=application/json"`
    Security CreateDisputeEvidenceTextSecurity 
    
}

type CreateDisputeEvidenceTextResponse struct {
    ContentType string 
    CreateDisputeEvidenceTextResponse *shared.CreateDisputeEvidenceTextResponse 
    StatusCode int64 
    
}


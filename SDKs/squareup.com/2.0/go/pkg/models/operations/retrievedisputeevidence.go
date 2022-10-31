package operations

import (
"openapi/pkg/models/shared")

type RetrieveDisputeEvidencePathParams struct {
    DisputeID string `pathParam:"style=simple,explode=false,name=dispute_id"`
    EvidenceID string `pathParam:"style=simple,explode=false,name=evidence_id"`
    
}

type RetrieveDisputeEvidenceSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveDisputeEvidenceRequest struct {
    PathParams RetrieveDisputeEvidencePathParams 
    Security RetrieveDisputeEvidenceSecurity 
    
}

type RetrieveDisputeEvidenceResponse struct {
    ContentType string 
    RetrieveDisputeEvidenceResponse *shared.RetrieveDisputeEvidenceResponse 
    StatusCode int64 
    
}


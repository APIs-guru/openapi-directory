package operations

import (
"openapi/pkg/models/shared")

type DeleteDisputeEvidencePathParams struct {
    DisputeID string `pathParam:"style=simple,explode=false,name=dispute_id"`
    EvidenceID string `pathParam:"style=simple,explode=false,name=evidence_id"`
    
}

type DeleteDisputeEvidenceSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteDisputeEvidenceRequest struct {
    PathParams DeleteDisputeEvidencePathParams 
    Security DeleteDisputeEvidenceSecurity 
    
}

type DeleteDisputeEvidenceResponse struct {
    ContentType string 
    DeleteDisputeEvidenceResponse *shared.DeleteDisputeEvidenceResponse 
    StatusCode int64 
    
}


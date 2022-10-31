package operations

import (
"openapi/pkg/models/shared")

type ViewAdvisoriesSystemsSecurity struct {
    RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
    
}

type ViewAdvisoriesSystemsRequest struct {
    Request shared.ControllersSystemsAdvisoriesRequest `request:"mediaType=application/json"`
    Security ViewAdvisoriesSystemsSecurity 
    
}

type ViewAdvisoriesSystemsResponse struct {
    ContentType string 
    StatusCode int64 
    ControllersAdvisoriesSystemsResponse *shared.ControllersAdvisoriesSystemsResponse 
    
}


package operations

import (
"openapi/pkg/models/shared")

type PostRenderSecurity struct {
    DeveloperKey shared.SchemeDeveloperKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostRenderRequest struct {
    Request shared.Edit `request:"mediaType=application/json"`
    Security PostRenderSecurity 
    
}

type PostRenderResponse struct {
    ContentType string 
    QueuedResponse *shared.QueuedResponse 
    StatusCode int64 
    
}


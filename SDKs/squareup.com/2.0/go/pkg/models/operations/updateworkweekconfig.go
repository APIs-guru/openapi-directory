package operations

import (
"openapi/pkg/models/shared")

type UpdateWorkweekConfigPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateWorkweekConfigSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UpdateWorkweekConfigRequest struct {
    PathParams UpdateWorkweekConfigPathParams 
    Request shared.UpdateWorkweekConfigRequest `request:"mediaType=application/json"`
    Security UpdateWorkweekConfigSecurity 
    
}

type UpdateWorkweekConfigResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateWorkweekConfigResponse *shared.UpdateWorkweekConfigResponse 
    
}


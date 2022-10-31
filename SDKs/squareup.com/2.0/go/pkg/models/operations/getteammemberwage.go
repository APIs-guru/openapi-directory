package operations

import (
"openapi/pkg/models/shared")

type GetTeamMemberWagePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetTeamMemberWageSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetTeamMemberWageRequest struct {
    PathParams GetTeamMemberWagePathParams 
    Security GetTeamMemberWageSecurity 
    
}

type GetTeamMemberWageResponse struct {
    ContentType string 
    GetTeamMemberWageResponse *shared.GetTeamMemberWageResponse 
    StatusCode int64 
    
}


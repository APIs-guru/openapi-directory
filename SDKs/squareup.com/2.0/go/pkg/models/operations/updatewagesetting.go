package operations

import (
"openapi/pkg/models/shared")

type UpdateWageSettingPathParams struct {
    TeamMemberID string `pathParam:"style=simple,explode=false,name=team_member_id"`
    
}

type UpdateWageSettingSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UpdateWageSettingRequest struct {
    PathParams UpdateWageSettingPathParams 
    Request shared.UpdateWageSettingRequest `request:"mediaType=application/json"`
    Security UpdateWageSettingSecurity 
    
}

type UpdateWageSettingResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateWageSettingResponse *shared.UpdateWageSettingResponse 
    
}


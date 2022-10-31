package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveWageSettingPathParams struct {
	TeamMemberID string `pathParam:"style=simple,explode=false,name=team_member_id"`
}

type RetrieveWageSettingSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RetrieveWageSettingRequest struct {
	PathParams RetrieveWageSettingPathParams
	Security   RetrieveWageSettingSecurity
}

type RetrieveWageSettingResponse struct {
	ContentType                 string
	RetrieveWageSettingResponse *shared.RetrieveWageSettingResponse
	StatusCode                  int64
}

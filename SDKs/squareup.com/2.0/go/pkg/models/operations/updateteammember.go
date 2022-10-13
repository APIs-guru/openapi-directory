package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTeamMemberPathParams struct {
	TeamMemberID string `pathParam:"style=simple,explode=false,name=team_member_id"`
}

type UpdateTeamMemberSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type UpdateTeamMemberRequest struct {
	PathParams UpdateTeamMemberPathParams
	Request    shared.UpdateTeamMemberRequest `request:"mediaType=application/json"`
	Security   UpdateTeamMemberSecurity
}

type UpdateTeamMemberResponse struct {
	ContentType              string
	StatusCode               int64
	UpdateTeamMemberResponse *shared.UpdateTeamMemberResponse
}

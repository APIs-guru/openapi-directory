package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTeamMemberSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateTeamMemberRequest struct {
	Request  shared.CreateTeamMemberRequest `request:"mediaType=application/json"`
	Security CreateTeamMemberSecurity
}

type CreateTeamMemberResponse struct {
	ContentType              string
	CreateTeamMemberResponse *shared.CreateTeamMemberResponse
	StatusCode               int64
}

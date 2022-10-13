package operations

import (
	"openapi/pkg/models/shared"
)

type SearchTeamMembersSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type SearchTeamMembersRequest struct {
	Request  shared.SearchTeamMembersRequest `request:"mediaType=application/json"`
	Security SearchTeamMembersSecurity
}

type SearchTeamMembersResponse struct {
	ContentType               string
	SearchTeamMembersResponse *shared.SearchTeamMembersResponse
	StatusCode                int64
}

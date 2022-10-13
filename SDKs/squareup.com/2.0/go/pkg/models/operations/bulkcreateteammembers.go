package operations

import (
	"openapi/pkg/models/shared"
)

type BulkCreateTeamMembersSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type BulkCreateTeamMembersRequest struct {
	Request  shared.BulkCreateTeamMembersRequest `request:"mediaType=application/json"`
	Security BulkCreateTeamMembersSecurity
}

type BulkCreateTeamMembersResponse struct {
	BulkCreateTeamMembersResponse *shared.BulkCreateTeamMembersResponse
	ContentType                   string
	StatusCode                    int64
}

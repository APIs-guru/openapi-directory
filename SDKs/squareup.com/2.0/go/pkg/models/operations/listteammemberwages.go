package operations

import (
	"openapi/pkg/models/shared"
)

type ListTeamMemberWagesQueryParams struct {
	Cursor       *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit        *int64  `queryParam:"style=form,explode=true,name=limit"`
	TeamMemberID *string `queryParam:"style=form,explode=true,name=team_member_id"`
}

type ListTeamMemberWagesSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ListTeamMemberWagesRequest struct {
	QueryParams ListTeamMemberWagesQueryParams
	Security    ListTeamMemberWagesSecurity
}

type ListTeamMemberWagesResponse struct {
	ContentType                 string
	ListTeamMemberWagesResponse *shared.ListTeamMemberWagesResponse
	StatusCode                  int64
}

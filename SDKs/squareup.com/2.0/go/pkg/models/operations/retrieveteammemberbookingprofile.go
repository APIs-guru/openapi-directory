package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveTeamMemberBookingProfilePathParams struct {
	TeamMemberID string `pathParam:"style=simple,explode=false,name=team_member_id"`
}

type RetrieveTeamMemberBookingProfileSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RetrieveTeamMemberBookingProfileRequest struct {
	PathParams RetrieveTeamMemberBookingProfilePathParams
	Security   RetrieveTeamMemberBookingProfileSecurity
}

type RetrieveTeamMemberBookingProfileResponse struct {
	ContentType                              string
	RetrieveTeamMemberBookingProfileResponse *shared.RetrieveTeamMemberBookingProfileResponse
	StatusCode                               int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type PostTeamsTeamIDMembershipsPathParams struct {
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
}

type PostTeamsTeamIDMembershipsRequests struct {
	UsersInvitation  *shared.UsersInvitation `request:"mediaType=application/*+json"`
	UsersInvitation1 *shared.UsersInvitation `request:"mediaType=application/json"`
	UsersInvitation2 *shared.UsersInvitation `request:"mediaType=application/json-patch+json"`
	UsersInvitation3 *shared.UsersInvitation `request:"mediaType=text/json"`
}

type PostTeamsTeamIDMembershipsRequest struct {
	PathParams PostTeamsTeamIDMembershipsPathParams
	Request    *PostTeamsTeamIDMembershipsRequests
}

type PostTeamsTeamIDMembershipsResponse struct {
	Body                  []byte
	ContentType           string
	ErrorResponseContent  *shared.ErrorResponseContent
	StatusCode            int64
	UserInvitationResults []shared.UserInvitationResult
}

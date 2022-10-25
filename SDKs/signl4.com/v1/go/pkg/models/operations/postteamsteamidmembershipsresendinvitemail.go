package operations

import (
	"openapi/pkg/models/shared"
)

type PostTeamsTeamIDMembershipsResendInviteMailPathParams struct {
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
}

type PostTeamsTeamIDMembershipsResendInviteMailRequests struct {
	UserInvitationInfo  *shared.UserInvitationInfo `request:"mediaType=application/*+json"`
	UserInvitationInfo1 *shared.UserInvitationInfo `request:"mediaType=application/json"`
	UserInvitationInfo2 *shared.UserInvitationInfo `request:"mediaType=application/json-patch+json"`
	UserInvitationInfo3 *shared.UserInvitationInfo `request:"mediaType=text/json"`
}

type PostTeamsTeamIDMembershipsResendInviteMailRequest struct {
	PathParams PostTeamsTeamIDMembershipsResendInviteMailPathParams
	Request    *PostTeamsTeamIDMembershipsResendInviteMailRequests
}

type PostTeamsTeamIDMembershipsResendInviteMailResponse struct {
	Body                                                               []byte
	ContentType                                                        string
	ErrorResponseContent                                               *shared.ErrorResponseContent
	PostTeamsTeamIDMembershipsResendInviteMail200ApplicationJSONString *string
	PostTeamsTeamIDMembershipsResendInviteMail200TextJSONString        *string
	PostTeamsTeamIDMembershipsResendInviteMail200TextPlainString       *string
	StatusCode                                                         int64
}

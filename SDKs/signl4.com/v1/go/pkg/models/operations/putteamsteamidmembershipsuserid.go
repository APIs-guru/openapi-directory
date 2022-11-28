package operations

import (
	"openapi/pkg/models/shared"
)

type PutTeamsTeamIDMembershipsUserIDPathParams struct {
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type PutTeamsTeamIDMembershipsUserIDQueryParams struct {
	RequesterUserID *string `queryParam:"style=form,explode=true,name=requesterUserId"`
}

type PutTeamsTeamIDMembershipsUserIDRequestsInput struct {
	UserMembership  *shared.UserMembershipInput `request:"mediaType=application/*+json"`
	UserMembership1 *shared.UserMembershipInput `request:"mediaType=application/json"`
	UserMembership2 *shared.UserMembershipInput `request:"mediaType=application/json-patch+json"`
	UserMembership3 *shared.UserMembershipInput `request:"mediaType=text/json"`
}

type PutTeamsTeamIDMembershipsUserIDRequest struct {
	PathParams  PutTeamsTeamIDMembershipsUserIDPathParams
	QueryParams PutTeamsTeamIDMembershipsUserIDQueryParams
	Request     *PutTeamsTeamIDMembershipsUserIDRequestsInput
}

type PutTeamsTeamIDMembershipsUserIDResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
	UserInfo             *shared.UserInfo
}

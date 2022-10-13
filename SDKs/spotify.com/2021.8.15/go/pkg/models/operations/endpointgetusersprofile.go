package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetUsersProfilePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type EndpointGetUsersProfileHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointGetUsersProfileSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetUsersProfileRequest struct {
	PathParams EndpointGetUsersProfilePathParams
	Headers    EndpointGetUsersProfileHeaders
	Security   EndpointGetUsersProfileSecurity
}

type EndpointGetUsersProfileResponse struct {
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	PublicUserObject    *shared.PublicUserObject
	StatusCode          int64
}

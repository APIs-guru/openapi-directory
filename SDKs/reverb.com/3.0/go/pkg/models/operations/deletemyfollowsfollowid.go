package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMyFollowsFollowIDPathParams struct {
	FollowID string `pathParam:"style=simple,explode=false,name=follow_id"`
}

type DeleteMyFollowsFollowIDSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteMyFollowsFollowIDRequest struct {
	PathParams DeleteMyFollowsFollowIDPathParams
	Security   DeleteMyFollowsFollowIDSecurity
}

type DeleteMyFollowsFollowIDResponse struct {
	ContentType string
	StatusCode  int64
}

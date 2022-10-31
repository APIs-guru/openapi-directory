package operations

import (
	"openapi/pkg/models/shared"
)

type UnfollowUserAlt1PathParams struct {
	FollowUserID float64 `pathParam:"style=simple,explode=false,name=follow_user_id"`
}

type UnfollowUserAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type UnfollowUserAlt1Request struct {
	PathParams UnfollowUserAlt1PathParams
	Security   UnfollowUserAlt1Security
}

type UnfollowUserAlt1Response struct {
	ContentType string
	StatusCode  int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type FollowUserAlt1PathParams struct {
	FollowUserID float64 `pathParam:"style=simple,explode=false,name=follow_user_id"`
}

type FollowUserAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type FollowUserAlt1Request struct {
	PathParams FollowUserAlt1PathParams
	Security   FollowUserAlt1Security
}

type FollowUserAlt1Response struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}

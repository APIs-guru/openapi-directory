package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyFollowsHandpickedSlugPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type GetMyFollowsHandpickedSlugSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyFollowsHandpickedSlugRequest struct {
	PathParams GetMyFollowsHandpickedSlugPathParams
	Security   GetMyFollowsHandpickedSlugSecurity
}

type GetMyFollowsHandpickedSlugResponse struct {
	ContentType string
	StatusCode  int64
}

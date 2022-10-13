package operations

import (
	"openapi/pkg/models/shared"
)

type PostMyFollowsHandpickedSlugPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type PostMyFollowsHandpickedSlugSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostMyFollowsHandpickedSlugRequest struct {
	PathParams PostMyFollowsHandpickedSlugPathParams
	Security   PostMyFollowsHandpickedSlugSecurity
}

type PostMyFollowsHandpickedSlugResponse struct {
	ContentType string
	StatusCode  int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyFollowsShopsSlugPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type GetMyFollowsShopsSlugSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyFollowsShopsSlugRequest struct {
	PathParams GetMyFollowsShopsSlugPathParams
	Security   GetMyFollowsShopsSlugSecurity
}

type GetMyFollowsShopsSlugResponse struct {
	ContentType string
	StatusCode  int64
}

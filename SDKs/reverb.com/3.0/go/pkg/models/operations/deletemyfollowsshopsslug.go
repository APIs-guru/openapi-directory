package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMyFollowsShopsSlugPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type DeleteMyFollowsShopsSlugSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteMyFollowsShopsSlugRequest struct {
	PathParams DeleteMyFollowsShopsSlugPathParams
	Security   DeleteMyFollowsShopsSlugSecurity
}

type DeleteMyFollowsShopsSlugResponse struct {
	ContentType string
	StatusCode  int64
}

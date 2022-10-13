package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMyFollowsCollectionsSlugPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type DeleteMyFollowsCollectionsSlugSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteMyFollowsCollectionsSlugRequest struct {
	PathParams DeleteMyFollowsCollectionsSlugPathParams
	Security   DeleteMyFollowsCollectionsSlugSecurity
}

type DeleteMyFollowsCollectionsSlugResponse struct {
	ContentType string
	StatusCode  int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMyFollowsBrandsSlugPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type DeleteMyFollowsBrandsSlugSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteMyFollowsBrandsSlugRequest struct {
	PathParams DeleteMyFollowsBrandsSlugPathParams
	Security   DeleteMyFollowsBrandsSlugSecurity
}

type DeleteMyFollowsBrandsSlugResponse struct {
	ContentType string
	StatusCode  int64
}

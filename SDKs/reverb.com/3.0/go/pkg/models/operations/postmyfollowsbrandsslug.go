package operations

import (
	"openapi/pkg/models/shared"
)

type PostMyFollowsBrandsSlugPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type PostMyFollowsBrandsSlugSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostMyFollowsBrandsSlugRequest struct {
	PathParams PostMyFollowsBrandsSlugPathParams
	Security   PostMyFollowsBrandsSlugSecurity
}

type PostMyFollowsBrandsSlugResponse struct {
	ContentType string
	StatusCode  int64
}

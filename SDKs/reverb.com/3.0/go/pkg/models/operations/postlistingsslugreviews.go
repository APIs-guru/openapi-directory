package operations

import (
	"openapi/pkg/models/shared"
)

type PostListingsSlugReviewsPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type PostListingsSlugReviewsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostListingsSlugReviewsRequest struct {
	PathParams PostListingsSlugReviewsPathParams
	Security   PostListingsSlugReviewsSecurity
}

type PostListingsSlugReviewsResponse struct {
	ContentType string
	StatusCode  int64
}

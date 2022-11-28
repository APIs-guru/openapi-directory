package operations

import (
	"openapi/pkg/models/shared"
)

type GetPostsByIdsQueryParams struct {
	PostIds string `queryParam:"style=form,explode=true,name=post_ids"`
}

type GetPostsByIdsSecurity struct {
	Oauth2Implicit *shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
	Oauth2Code     *shared.SchemeOauth2Code     `security:"scheme,type=oauth2"`
	APIKey         *shared.SchemeAPIKey         `security:"scheme,type=apiKey,subtype=query"`
}

type GetPostsByIdsRequest struct {
	QueryParams GetPostsByIdsQueryParams
	Security    GetPostsByIdsSecurity
}

type GetPostsByIdsResponse struct {
	ContentType string
	Posts       []shared.Post
	StatusCode  int64
}

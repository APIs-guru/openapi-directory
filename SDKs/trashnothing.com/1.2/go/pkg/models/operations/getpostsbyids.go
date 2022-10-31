package operations

import (
	"openapi/pkg/models/shared"
)

type GetPostsByIdsQueryParams struct {
	PostIds string `queryParam:"style=form,explode=true,name=post_ids"`
}

type GetPostsByIdsSecurityOption1 struct {
	Oauth2Implicit shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
}

type GetPostsByIdsSecurityOption2 struct {
	Oauth2Code shared.SchemeOauth2Code `security:"scheme,type=oauth2"`
}

type GetPostsByIdsSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetPostsByIdsSecurity struct {
	Option1 *GetPostsByIdsSecurityOption1 `security:"option"`
	Option2 *GetPostsByIdsSecurityOption2 `security:"option"`
	Option3 *GetPostsByIdsSecurityOption3 `security:"option"`
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

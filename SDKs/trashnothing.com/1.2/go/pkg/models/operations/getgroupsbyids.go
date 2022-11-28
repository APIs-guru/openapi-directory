package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupsByIdsQueryParams struct {
	GroupIds string `queryParam:"style=form,explode=true,name=group_ids"`
}

type GetGroupsByIdsSecurity struct {
	Oauth2Implicit *shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
	Oauth2Code     *shared.SchemeOauth2Code     `security:"scheme,type=oauth2"`
	APIKey         *shared.SchemeAPIKey         `security:"scheme,type=apiKey,subtype=query"`
}

type GetGroupsByIdsRequest struct {
	QueryParams GetGroupsByIdsQueryParams
	Security    GetGroupsByIdsSecurity
}

type GetGroupsByIdsResponse struct {
	ContentType string
	Groups      []shared.Group
	StatusCode  int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type SearchGroupsQueryParams struct {
	Country    *string  `queryParam:"style=form,explode=true,name=country"`
	Distance   *float64 `queryParam:"style=form,explode=true,name=distance"`
	Latitude   *float64 `queryParam:"style=form,explode=true,name=latitude"`
	Longitude  *float64 `queryParam:"style=form,explode=true,name=longitude"`
	Name       *string  `queryParam:"style=form,explode=true,name=name"`
	Page       *int64   `queryParam:"style=form,explode=true,name=page"`
	PerPage    *int64   `queryParam:"style=form,explode=true,name=per_page"`
	PostalCode *string  `queryParam:"style=form,explode=true,name=postal_code"`
	Region     *string  `queryParam:"style=form,explode=true,name=region"`
}

type SearchGroupsSecurity struct {
	Oauth2Implicit *shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
	Oauth2Code     *shared.SchemeOauth2Code     `security:"scheme,type=oauth2"`
	APIKey         *shared.SchemeAPIKey         `security:"scheme,type=apiKey,subtype=query"`
}

type SearchGroups200ApplicationJSON struct {
	EndIndex   *int64         `json:"end_index,omitempty"`
	Groups     []shared.Group `json:"groups,omitempty"`
	NumGroups  *int64         `json:"num_groups,omitempty"`
	NumPages   *int64         `json:"num_pages,omitempty"`
	Page       *int64         `json:"page,omitempty"`
	PerPage    *int64         `json:"per_page,omitempty"`
	StartIndex *int64         `json:"start_index,omitempty"`
}

type SearchGroupsRequest struct {
	QueryParams SearchGroupsQueryParams
	Security    SearchGroupsSecurity
}

type SearchGroupsResponse struct {
	ContentType                          string
	StatusCode                           int64
	SearchGroups200ApplicationJSONObject *SearchGroups200ApplicationJSON
}

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

type SearchGroupsSecurityOption1 struct {
	Oauth2Implicit shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
}

type SearchGroupsSecurityOption2 struct {
	Oauth2Code shared.SchemeOauth2Code `security:"scheme,type=oauth2"`
}

type SearchGroupsSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type SearchGroupsSecurity struct {
	Option1 *SearchGroupsSecurityOption1 `security:"option"`
	Option2 *SearchGroupsSecurityOption2 `security:"option"`
	Option3 *SearchGroupsSecurityOption3 `security:"option"`
}

type SearchGroupsRequest struct {
	QueryParams SearchGroupsQueryParams
	Security    SearchGroupsSecurity
}

type SearchGroups200ApplicationJSON struct {
	EndIndex   *int64         `json:"end_index"`
	Groups     []shared.Group `json:"groups"`
	NumGroups  *int64         `json:"num_groups"`
	NumPages   *int64         `json:"num_pages"`
	Page       *int64         `json:"page"`
	PerPage    *int64         `json:"per_page"`
	StartIndex *int64         `json:"start_index"`
}

type SearchGroupsResponse struct {
	ContentType                          string
	StatusCode                           int64
	SearchGroups200ApplicationJSONObject *SearchGroups200ApplicationJSON
}

package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type SearchPostsQueryParams struct {
	DateMax          *time.Time `queryParam:"style=form,explode=true,name=date_max"`
	DateMin          *time.Time `queryParam:"style=form,explode=true,name=date_min"`
	DevicePixelRatio *float64   `queryParam:"style=form,explode=true,name=device_pixel_ratio"`
	GroupIds         *string    `queryParam:"style=form,explode=true,name=group_ids"`
	Latitude         *float64   `queryParam:"style=form,explode=true,name=latitude"`
	Longitude        *float64   `queryParam:"style=form,explode=true,name=longitude"`
	Outcomes         *string    `queryParam:"style=form,explode=true,name=outcomes"`
	Page             *int64     `queryParam:"style=form,explode=true,name=page"`
	PerPage          *int64     `queryParam:"style=form,explode=true,name=per_page"`
	Radius           *float64   `queryParam:"style=form,explode=true,name=radius"`
	Search           string     `queryParam:"style=form,explode=true,name=search"`
	SortBy           *string    `queryParam:"style=form,explode=true,name=sort_by"`
	Sources          string     `queryParam:"style=form,explode=true,name=sources"`
	Types            string     `queryParam:"style=form,explode=true,name=types"`
	UserState        *string    `queryParam:"style=form,explode=true,name=user_state"`
}

type SearchPostsSecurityOption1 struct {
	Oauth2Implicit shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
}

type SearchPostsSecurityOption2 struct {
	Oauth2Code shared.SchemeOauth2Code `security:"scheme,type=oauth2"`
}

type SearchPostsSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type SearchPostsSecurity struct {
	Option1 *SearchPostsSecurityOption1 `security:"option"`
	Option2 *SearchPostsSecurityOption2 `security:"option"`
	Option3 *SearchPostsSecurityOption3 `security:"option"`
}

type SearchPostsRequest struct {
	QueryParams SearchPostsQueryParams
	Security    SearchPostsSecurity
}

type SearchPosts200ApplicationJSON struct {
	EndIndex   *int64                    `json:"end_index"`
	GroupIds   []string                  `json:"group_ids"`
	NumPages   *int64                    `json:"num_pages"`
	NumPosts   *int64                    `json:"num_posts"`
	Page       *int64                    `json:"page"`
	PerPage    *int64                    `json:"per_page"`
	Posts      []shared.PostSearchResult `json:"posts"`
	StartIndex *int64                    `json:"start_index"`
}

type SearchPostsResponse struct {
	ContentType                         string
	StatusCode                          int64
	SearchPosts200ApplicationJSONObject *SearchPosts200ApplicationJSON
}

package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetPostsQueryParams struct {
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
	SortBy           *string    `queryParam:"style=form,explode=true,name=sort_by"`
	Sources          string     `queryParam:"style=form,explode=true,name=sources"`
	Types            string     `queryParam:"style=form,explode=true,name=types"`
	UserState        *string    `queryParam:"style=form,explode=true,name=user_state"`
}

type GetPostsSecurity struct {
	Oauth2Implicit *shared.SchemeOauth2Implicit `security:"scheme,type=oauth2"`
	Oauth2Code     *shared.SchemeOauth2Code     `security:"scheme,type=oauth2"`
	APIKey         *shared.SchemeAPIKey         `security:"scheme,type=apiKey,subtype=query"`
}

type GetPosts200ApplicationJSON struct {
	EndIndex         *int64        `json:"end_index,omitempty"`
	GroupIds         []string      `json:"group_ids,omitempty"`
	LastListingsView *time.Time    `json:"last_listings_view,omitempty"`
	NumPages         *int64        `json:"num_pages,omitempty"`
	NumPosts         *int64        `json:"num_posts,omitempty"`
	Page             *int64        `json:"page,omitempty"`
	PerPage          *int64        `json:"per_page,omitempty"`
	Posts            []shared.Post `json:"posts,omitempty"`
	StartIndex       *int64        `json:"start_index,omitempty"`
}

type GetPostsRequest struct {
	QueryParams GetPostsQueryParams
	Security    GetPostsSecurity
}

type GetPostsResponse struct {
	ContentType                      string
	StatusCode                       int64
	GetPosts200ApplicationJSONObject *GetPosts200ApplicationJSON
}

package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCurrentUserPostsQueryParams struct {
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

type GetCurrentUserPostsRequest struct {
	QueryParams GetCurrentUserPostsQueryParams
}

type GetCurrentUserPosts200ApplicationJSON struct {
	EndIndex         *int64        `json:"end_index"`
	GroupIds         []string      `json:"group_ids"`
	LastListingsView *time.Time    `json:"last_listings_view"`
	NumPages         *int64        `json:"num_pages"`
	NumPosts         *int64        `json:"num_posts"`
	Page             *int64        `json:"page"`
	PerPage          *int64        `json:"per_page"`
	Posts            []shared.Post `json:"posts"`
	StartIndex       *int64        `json:"start_index"`
}

type GetCurrentUserPostsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetCurrentUserPosts200ApplicationJSONObject *GetCurrentUserPosts200ApplicationJSON
}

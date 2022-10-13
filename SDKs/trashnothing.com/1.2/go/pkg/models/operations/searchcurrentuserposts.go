package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type SearchCurrentUserPostsQueryParams struct {
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

type SearchCurrentUserPostsRequest struct {
	QueryParams SearchCurrentUserPostsQueryParams
}

type SearchCurrentUserPosts200ApplicationJSON struct {
	EndIndex   *int64                    `json:"end_index"`
	GroupIds   []string                  `json:"group_ids"`
	NumPages   *int64                    `json:"num_pages"`
	NumPosts   *int64                    `json:"num_posts"`
	Page       *int64                    `json:"page"`
	PerPage    *int64                    `json:"per_page"`
	Posts      []shared.PostSearchResult `json:"posts"`
	StartIndex *int64                    `json:"start_index"`
}

type SearchCurrentUserPostsResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	SearchCurrentUserPosts200ApplicationJSONObject *SearchCurrentUserPosts200ApplicationJSON
}

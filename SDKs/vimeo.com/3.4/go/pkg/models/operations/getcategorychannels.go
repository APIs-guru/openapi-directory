package operations

import (
	"openapi/pkg/models/shared"
)

type GetCategoryChannelsPathParams struct {
	Category string `pathParam:"style=simple,explode=false,name=category"`
}

type GetCategoryChannelsDirectionEnum string

const (
	GetCategoryChannelsDirectionEnumAsc  GetCategoryChannelsDirectionEnum = "asc"
	GetCategoryChannelsDirectionEnumDesc GetCategoryChannelsDirectionEnum = "desc"
)

type GetCategoryChannelsSortEnum string

const (
	GetCategoryChannelsSortEnumAlphabetical GetCategoryChannelsSortEnum = "alphabetical"
	GetCategoryChannelsSortEnumDate         GetCategoryChannelsSortEnum = "date"
	GetCategoryChannelsSortEnumFollowers    GetCategoryChannelsSortEnum = "followers"
	GetCategoryChannelsSortEnumVideos       GetCategoryChannelsSortEnum = "videos"
)

type GetCategoryChannelsQueryParams struct {
	Direction *GetCategoryChannelsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *float64                          `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                          `queryParam:"style=form,explode=true,name=per_page"`
	Query     *string                           `queryParam:"style=form,explode=true,name=query"`
	Sort      *GetCategoryChannelsSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetCategoryChannelsRequest struct {
	PathParams  GetCategoryChannelsPathParams
	QueryParams GetCategoryChannelsQueryParams
}

type GetCategoryChannelsResponse struct {
	ContentType string
	StatusCode  int64
	Channels    []shared.Channel
	LegacyError *shared.LegacyError
}

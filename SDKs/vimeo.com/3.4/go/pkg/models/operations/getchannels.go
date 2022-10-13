package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelsDirectionEnum string

const (
	GetChannelsDirectionEnumAsc  GetChannelsDirectionEnum = "asc"
	GetChannelsDirectionEnumDesc GetChannelsDirectionEnum = "desc"
)

type GetChannelsFilterEnum string

const (
	GetChannelsFilterEnumFeatured GetChannelsFilterEnum = "featured"
)

type GetChannelsSortEnum string

const (
	GetChannelsSortEnumAlphabetical GetChannelsSortEnum = "alphabetical"
	GetChannelsSortEnumDate         GetChannelsSortEnum = "date"
	GetChannelsSortEnumFollowers    GetChannelsSortEnum = "followers"
	GetChannelsSortEnumRelevant     GetChannelsSortEnum = "relevant"
	GetChannelsSortEnumVideos       GetChannelsSortEnum = "videos"
)

type GetChannelsQueryParams struct {
	Direction *GetChannelsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter    *GetChannelsFilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	Page      *float64                  `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                  `queryParam:"style=form,explode=true,name=per_page"`
	Query     *string                   `queryParam:"style=form,explode=true,name=query"`
	Sort      *GetChannelsSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetChannelsRequest struct {
	QueryParams GetChannelsQueryParams
}

type GetChannelsResponse struct {
	ContentType string
	StatusCode  int64
	Channels    []shared.Channel
	LegacyError *shared.LegacyError
}

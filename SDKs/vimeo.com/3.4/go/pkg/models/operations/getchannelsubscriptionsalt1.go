package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelSubscriptionsAlt1DirectionEnum string

const (
	GetChannelSubscriptionsAlt1DirectionEnumAsc  GetChannelSubscriptionsAlt1DirectionEnum = "asc"
	GetChannelSubscriptionsAlt1DirectionEnumDesc GetChannelSubscriptionsAlt1DirectionEnum = "desc"
)

type GetChannelSubscriptionsAlt1FilterEnum string

const (
	GetChannelSubscriptionsAlt1FilterEnumModerated GetChannelSubscriptionsAlt1FilterEnum = "moderated"
)

type GetChannelSubscriptionsAlt1SortEnum string

const (
	GetChannelSubscriptionsAlt1SortEnumAlphabetical GetChannelSubscriptionsAlt1SortEnum = "alphabetical"
	GetChannelSubscriptionsAlt1SortEnumDate         GetChannelSubscriptionsAlt1SortEnum = "date"
	GetChannelSubscriptionsAlt1SortEnumFollowers    GetChannelSubscriptionsAlt1SortEnum = "followers"
	GetChannelSubscriptionsAlt1SortEnumVideos       GetChannelSubscriptionsAlt1SortEnum = "videos"
)

type GetChannelSubscriptionsAlt1QueryParams struct {
	Direction *GetChannelSubscriptionsAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter    *GetChannelSubscriptionsAlt1FilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	Page      *float64                                  `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                                  `queryParam:"style=form,explode=true,name=per_page"`
	Query     *string                                   `queryParam:"style=form,explode=true,name=query"`
	Sort      *GetChannelSubscriptionsAlt1SortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetChannelSubscriptionsAlt1Request struct {
	QueryParams GetChannelSubscriptionsAlt1QueryParams
}

type GetChannelSubscriptionsAlt1Response struct {
	ContentType string
	StatusCode  int64
	Channels    []shared.Channel
}

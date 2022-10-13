package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelSubscribersPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type GetChannelSubscribersDirectionEnum string

const (
	GetChannelSubscribersDirectionEnumAsc  GetChannelSubscribersDirectionEnum = "asc"
	GetChannelSubscribersDirectionEnumDesc GetChannelSubscribersDirectionEnum = "desc"
)

type GetChannelSubscribersFilterEnum string

const (
	GetChannelSubscribersFilterEnumModerators GetChannelSubscribersFilterEnum = "moderators"
)

type GetChannelSubscribersSortEnum string

const (
	GetChannelSubscribersSortEnumAlphabetical GetChannelSubscribersSortEnum = "alphabetical"
	GetChannelSubscribersSortEnumDate         GetChannelSubscribersSortEnum = "date"
)

type GetChannelSubscribersQueryParams struct {
	Direction *GetChannelSubscribersDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter    GetChannelSubscribersFilterEnum     `queryParam:"style=form,explode=true,name=filter"`
	Page      *float64                            `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                            `queryParam:"style=form,explode=true,name=per_page"`
	Query     *string                             `queryParam:"style=form,explode=true,name=query"`
	Sort      *GetChannelSubscribersSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetChannelSubscribersRequest struct {
	PathParams  GetChannelSubscribersPathParams
	QueryParams GetChannelSubscribersQueryParams
}

type GetChannelSubscribersResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Users       []shared.User
}

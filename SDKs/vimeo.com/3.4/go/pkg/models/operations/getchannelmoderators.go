package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelModeratorsPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type GetChannelModeratorsDirectionEnum string

const (
	GetChannelModeratorsDirectionEnumAsc  GetChannelModeratorsDirectionEnum = "asc"
	GetChannelModeratorsDirectionEnumDesc GetChannelModeratorsDirectionEnum = "desc"
)

type GetChannelModeratorsSortEnum string

const (
	GetChannelModeratorsSortEnumAlphabetical GetChannelModeratorsSortEnum = "alphabetical"
	GetChannelModeratorsSortEnumDate         GetChannelModeratorsSortEnum = "date"
)

type GetChannelModeratorsQueryParams struct {
	Direction *GetChannelModeratorsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *float64                           `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                           `queryParam:"style=form,explode=true,name=per_page"`
	Query     *string                            `queryParam:"style=form,explode=true,name=query"`
	Sort      *GetChannelModeratorsSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetChannelModeratorsRequest struct {
	PathParams  GetChannelModeratorsPathParams
	QueryParams GetChannelModeratorsQueryParams
}

type GetChannelModeratorsResponse struct {
	ContentType string
	StatusCode  int64
	Users       []shared.User
}

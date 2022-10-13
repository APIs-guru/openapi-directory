package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelVideosPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type GetChannelVideosDirectionEnum string

const (
	GetChannelVideosDirectionEnumAsc  GetChannelVideosDirectionEnum = "asc"
	GetChannelVideosDirectionEnumDesc GetChannelVideosDirectionEnum = "desc"
)

type GetChannelVideosFilterEnum string

const (
	GetChannelVideosFilterEnumEmbeddable GetChannelVideosFilterEnum = "embeddable"
)

type GetChannelVideosSortEnum string

const (
	GetChannelVideosSortEnumAdded        GetChannelVideosSortEnum = "added"
	GetChannelVideosSortEnumAlphabetical GetChannelVideosSortEnum = "alphabetical"
	GetChannelVideosSortEnumComments     GetChannelVideosSortEnum = "comments"
	GetChannelVideosSortEnumDate         GetChannelVideosSortEnum = "date"
	GetChannelVideosSortEnumDefault      GetChannelVideosSortEnum = "default"
	GetChannelVideosSortEnumDuration     GetChannelVideosSortEnum = "duration"
	GetChannelVideosSortEnumLikes        GetChannelVideosSortEnum = "likes"
	GetChannelVideosSortEnumManual       GetChannelVideosSortEnum = "manual"
	GetChannelVideosSortEnumModifiedTime GetChannelVideosSortEnum = "modified_time"
	GetChannelVideosSortEnumPlays        GetChannelVideosSortEnum = "plays"
)

type GetChannelVideosQueryParams struct {
	ContainingURI    *string                        `queryParam:"style=form,explode=true,name=containing_uri"`
	Direction        *GetChannelVideosDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter           *GetChannelVideosFilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	FilterEmbeddable *bool                          `queryParam:"style=form,explode=true,name=filter_embeddable"`
	Page             *float64                       `queryParam:"style=form,explode=true,name=page"`
	PerPage          *float64                       `queryParam:"style=form,explode=true,name=per_page"`
	Query            *string                        `queryParam:"style=form,explode=true,name=query"`
	Sort             *GetChannelVideosSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetChannelVideosRequest struct {
	PathParams  GetChannelVideosPathParams
	QueryParams GetChannelVideosQueryParams
}

type GetChannelVideosResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Videos      []shared.Video
}

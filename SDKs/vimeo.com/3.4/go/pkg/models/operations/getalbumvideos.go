package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlbumVideosPathParams struct {
	AlbumID float64 `pathParam:"style=simple,explode=false,name=album_id"`
	UserID  float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetAlbumVideosDirectionEnum string

const (
	GetAlbumVideosDirectionEnumAsc  GetAlbumVideosDirectionEnum = "asc"
	GetAlbumVideosDirectionEnumDesc GetAlbumVideosDirectionEnum = "desc"
)

type GetAlbumVideosFilterEnum string

const (
	GetAlbumVideosFilterEnumEmbeddable GetAlbumVideosFilterEnum = "embeddable"
)

type GetAlbumVideosSortEnum string

const (
	GetAlbumVideosSortEnumAlphabetical GetAlbumVideosSortEnum = "alphabetical"
	GetAlbumVideosSortEnumComments     GetAlbumVideosSortEnum = "comments"
	GetAlbumVideosSortEnumDate         GetAlbumVideosSortEnum = "date"
	GetAlbumVideosSortEnumDefault      GetAlbumVideosSortEnum = "default"
	GetAlbumVideosSortEnumDuration     GetAlbumVideosSortEnum = "duration"
	GetAlbumVideosSortEnumLikes        GetAlbumVideosSortEnum = "likes"
	GetAlbumVideosSortEnumManual       GetAlbumVideosSortEnum = "manual"
	GetAlbumVideosSortEnumModifiedTime GetAlbumVideosSortEnum = "modified_time"
	GetAlbumVideosSortEnumPlays        GetAlbumVideosSortEnum = "plays"
)

type GetAlbumVideosQueryParams struct {
	ContainingURI    *string                      `queryParam:"style=form,explode=true,name=containing_uri"`
	Direction        *GetAlbumVideosDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter           *GetAlbumVideosFilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	FilterEmbeddable *bool                        `queryParam:"style=form,explode=true,name=filter_embeddable"`
	Page             *float64                     `queryParam:"style=form,explode=true,name=page"`
	Password         *string                      `queryParam:"style=form,explode=true,name=password"`
	PerPage          *float64                     `queryParam:"style=form,explode=true,name=per_page"`
	Query            *string                      `queryParam:"style=form,explode=true,name=query"`
	Sort             *GetAlbumVideosSortEnum      `queryParam:"style=form,explode=true,name=sort"`
	WeakSearch       *bool                        `queryParam:"style=form,explode=true,name=weak_search"`
}

type GetAlbumVideosRequest struct {
	PathParams  GetAlbumVideosPathParams
	QueryParams GetAlbumVideosQueryParams
}

type GetAlbumVideosResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Videos      []shared.Video
}

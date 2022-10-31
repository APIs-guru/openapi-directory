package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupVideosPathParams struct {
	GroupID float64 `pathParam:"style=simple,explode=false,name=group_id"`
}

type GetGroupVideosDirectionEnum string

const (
	GetGroupVideosDirectionEnumAsc  GetGroupVideosDirectionEnum = "asc"
	GetGroupVideosDirectionEnumDesc GetGroupVideosDirectionEnum = "desc"
)

type GetGroupVideosFilterEnum string

const (
	GetGroupVideosFilterEnumEmbeddable GetGroupVideosFilterEnum = "embeddable"
)

type GetGroupVideosSortEnum string

const (
	GetGroupVideosSortEnumAlphabetical GetGroupVideosSortEnum = "alphabetical"
	GetGroupVideosSortEnumComments     GetGroupVideosSortEnum = "comments"
	GetGroupVideosSortEnumDate         GetGroupVideosSortEnum = "date"
	GetGroupVideosSortEnumDuration     GetGroupVideosSortEnum = "duration"
	GetGroupVideosSortEnumLikes        GetGroupVideosSortEnum = "likes"
	GetGroupVideosSortEnumPlays        GetGroupVideosSortEnum = "plays"
)

type GetGroupVideosQueryParams struct {
	Direction        *GetGroupVideosDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter           *GetGroupVideosFilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	FilterEmbeddable *bool                        `queryParam:"style=form,explode=true,name=filter_embeddable"`
	Page             *float64                     `queryParam:"style=form,explode=true,name=page"`
	PerPage          *float64                     `queryParam:"style=form,explode=true,name=per_page"`
	Query            *string                      `queryParam:"style=form,explode=true,name=query"`
	Sort             *GetGroupVideosSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetGroupVideosRequest struct {
	PathParams  GetGroupVideosPathParams
	QueryParams GetGroupVideosQueryParams
}

type GetGroupVideosResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Videos      []shared.Video
}

package operations

import (
	"openapi/pkg/models/shared"
)

type GetVodLikesPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type GetVodLikesDirectionEnum string

const (
	GetVodLikesDirectionEnumAsc  GetVodLikesDirectionEnum = "asc"
	GetVodLikesDirectionEnumDesc GetVodLikesDirectionEnum = "desc"
)

type GetVodLikesFilterEnum string

const (
	GetVodLikesFilterEnumExtra   GetVodLikesFilterEnum = "extra"
	GetVodLikesFilterEnumMain    GetVodLikesFilterEnum = "main"
	GetVodLikesFilterEnumTrailer GetVodLikesFilterEnum = "trailer"
)

type GetVodLikesSortEnum string

const (
	GetVodLikesSortEnumAlphabetical GetVodLikesSortEnum = "alphabetical"
	GetVodLikesSortEnumDate         GetVodLikesSortEnum = "date"
)

type GetVodLikesQueryParams struct {
	Direction *GetVodLikesDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter    *GetVodLikesFilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	Page      *float64                  `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                  `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *GetVodLikesSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetVodLikesRequest struct {
	PathParams  GetVodLikesPathParams
	QueryParams GetVodLikesQueryParams
}

type GetVodLikesResponse struct {
	ContentType string
	StatusCode  int64
	Users       []shared.User
}

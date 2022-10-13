package operations

import (
	"openapi/pkg/models/shared"
)

type GetLikesPathParams struct {
	UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetLikesFilterEnum string

const (
	GetLikesFilterEnumEmbeddable GetLikesFilterEnum = "embeddable"
)

type GetLikesSortEnum string

const (
	GetLikesSortEnumAlphabetical GetLikesSortEnum = "alphabetical"
	GetLikesSortEnumComments     GetLikesSortEnum = "comments"
	GetLikesSortEnumDate         GetLikesSortEnum = "date"
	GetLikesSortEnumDuration     GetLikesSortEnum = "duration"
	GetLikesSortEnumLikes        GetLikesSortEnum = "likes"
	GetLikesSortEnumPlays        GetLikesSortEnum = "plays"
)

type GetLikesQueryParams struct {
	Filter           *GetLikesFilterEnum `queryParam:"style=form,explode=true,name=filter"`
	FilterEmbeddable *bool               `queryParam:"style=form,explode=true,name=filter_embeddable"`
	Page             *float64            `queryParam:"style=form,explode=true,name=page"`
	PerPage          *float64            `queryParam:"style=form,explode=true,name=per_page"`
	Query            *string             `queryParam:"style=form,explode=true,name=query"`
	Sort             *GetLikesSortEnum   `queryParam:"style=form,explode=true,name=sort"`
}

type GetLikesRequest struct {
	PathParams  GetLikesPathParams
	QueryParams GetLikesQueryParams
}

type GetLikesResponse struct {
	ContentType string
	StatusCode  int64
	Videos      []shared.Video
}

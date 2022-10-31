package operations

import (
	"openapi/pkg/models/shared"
)

type GetCategoryVideosPathParams struct {
	Category string `pathParam:"style=simple,explode=false,name=category"`
}

type GetCategoryVideosDirectionEnum string

const (
	GetCategoryVideosDirectionEnumAsc  GetCategoryVideosDirectionEnum = "asc"
	GetCategoryVideosDirectionEnumDesc GetCategoryVideosDirectionEnum = "desc"
)

type GetCategoryVideosFilterEnum string

const (
	GetCategoryVideosFilterEnumConditionalFeatured GetCategoryVideosFilterEnum = "conditional_featured"
	GetCategoryVideosFilterEnumEmbeddable          GetCategoryVideosFilterEnum = "embeddable"
)

type GetCategoryVideosSortEnum string

const (
	GetCategoryVideosSortEnumAlphabetical GetCategoryVideosSortEnum = "alphabetical"
	GetCategoryVideosSortEnumComments     GetCategoryVideosSortEnum = "comments"
	GetCategoryVideosSortEnumDate         GetCategoryVideosSortEnum = "date"
	GetCategoryVideosSortEnumDuration     GetCategoryVideosSortEnum = "duration"
	GetCategoryVideosSortEnumFeatured     GetCategoryVideosSortEnum = "featured"
	GetCategoryVideosSortEnumLikes        GetCategoryVideosSortEnum = "likes"
	GetCategoryVideosSortEnumPlays        GetCategoryVideosSortEnum = "plays"
	GetCategoryVideosSortEnumRelevant     GetCategoryVideosSortEnum = "relevant"
)

type GetCategoryVideosQueryParams struct {
	Direction        *GetCategoryVideosDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter           *GetCategoryVideosFilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	FilterEmbeddable *bool                           `queryParam:"style=form,explode=true,name=filter_embeddable"`
	Page             *float64                        `queryParam:"style=form,explode=true,name=page"`
	PerPage          *float64                        `queryParam:"style=form,explode=true,name=per_page"`
	Query            *string                         `queryParam:"style=form,explode=true,name=query"`
	Sort             *GetCategoryVideosSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetCategoryVideosRequest struct {
	PathParams  GetCategoryVideosPathParams
	QueryParams GetCategoryVideosQueryParams
}

type GetCategoryVideosResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Videos      []shared.Video
}

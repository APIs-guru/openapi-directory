package operations

import (
	"openapi/pkg/models/shared"
)

type GetAppearancesPathParams struct {
	UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetAppearancesDirectionEnum string

const (
	GetAppearancesDirectionEnumAsc  GetAppearancesDirectionEnum = "asc"
	GetAppearancesDirectionEnumDesc GetAppearancesDirectionEnum = "desc"
)

type GetAppearancesFilterEnum string

const (
	GetAppearancesFilterEnumEmbeddable GetAppearancesFilterEnum = "embeddable"
)

type GetAppearancesSortEnum string

const (
	GetAppearancesSortEnumAlphabetical GetAppearancesSortEnum = "alphabetical"
	GetAppearancesSortEnumComments     GetAppearancesSortEnum = "comments"
	GetAppearancesSortEnumDate         GetAppearancesSortEnum = "date"
	GetAppearancesSortEnumDuration     GetAppearancesSortEnum = "duration"
	GetAppearancesSortEnumLikes        GetAppearancesSortEnum = "likes"
	GetAppearancesSortEnumPlays        GetAppearancesSortEnum = "plays"
)

type GetAppearancesQueryParams struct {
	Direction        *GetAppearancesDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter           *GetAppearancesFilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	FilterEmbeddable *bool                        `queryParam:"style=form,explode=true,name=filter_embeddable"`
	Page             *float64                     `queryParam:"style=form,explode=true,name=page"`
	PerPage          *float64                     `queryParam:"style=form,explode=true,name=per_page"`
	Query            *string                      `queryParam:"style=form,explode=true,name=query"`
	Sort             *GetAppearancesSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetAppearancesRequest struct {
	PathParams  GetAppearancesPathParams
	QueryParams GetAppearancesQueryParams
}

type GetAppearancesResponse struct {
	ContentType string
	StatusCode  int64
	Videos      []shared.Video
}

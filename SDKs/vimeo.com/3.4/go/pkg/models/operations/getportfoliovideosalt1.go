package operations

import (
	"openapi/pkg/models/shared"
)

type GetPortfolioVideosAlt1PathParams struct {
	PortfolioID float64 `pathParam:"style=simple,explode=false,name=portfolio_id"`
}

type GetPortfolioVideosAlt1FilterEnum string

const (
	GetPortfolioVideosAlt1FilterEnumEmbeddable GetPortfolioVideosAlt1FilterEnum = "embeddable"
)

type GetPortfolioVideosAlt1SortEnum string

const (
	GetPortfolioVideosAlt1SortEnumAlphabetical GetPortfolioVideosAlt1SortEnum = "alphabetical"
	GetPortfolioVideosAlt1SortEnumComments     GetPortfolioVideosAlt1SortEnum = "comments"
	GetPortfolioVideosAlt1SortEnumDate         GetPortfolioVideosAlt1SortEnum = "date"
	GetPortfolioVideosAlt1SortEnumDefault      GetPortfolioVideosAlt1SortEnum = "default"
	GetPortfolioVideosAlt1SortEnumLikes        GetPortfolioVideosAlt1SortEnum = "likes"
	GetPortfolioVideosAlt1SortEnumManual       GetPortfolioVideosAlt1SortEnum = "manual"
	GetPortfolioVideosAlt1SortEnumPlays        GetPortfolioVideosAlt1SortEnum = "plays"
)

type GetPortfolioVideosAlt1QueryParams struct {
	ContainingURI    *string                           `queryParam:"style=form,explode=true,name=containing_uri"`
	Filter           *GetPortfolioVideosAlt1FilterEnum `queryParam:"style=form,explode=true,name=filter"`
	FilterEmbeddable *bool                             `queryParam:"style=form,explode=true,name=filter_embeddable"`
	Page             *float64                          `queryParam:"style=form,explode=true,name=page"`
	PerPage          *float64                          `queryParam:"style=form,explode=true,name=per_page"`
	Sort             *GetPortfolioVideosAlt1SortEnum   `queryParam:"style=form,explode=true,name=sort"`
}

type GetPortfolioVideosAlt1Request struct {
	PathParams  GetPortfolioVideosAlt1PathParams
	QueryParams GetPortfolioVideosAlt1QueryParams
}

type GetPortfolioVideosAlt1Response struct {
	ContentType string
	StatusCode  int64
	Videos      []shared.Video
}

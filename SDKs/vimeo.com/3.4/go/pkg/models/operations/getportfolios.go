package operations

import (
	"openapi/pkg/models/shared"
)

type GetPortfoliosPathParams struct {
	UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetPortfoliosDirectionEnum string

const (
	GetPortfoliosDirectionEnumAsc  GetPortfoliosDirectionEnum = "asc"
	GetPortfoliosDirectionEnumDesc GetPortfoliosDirectionEnum = "desc"
)

type GetPortfoliosSortEnum string

const (
	GetPortfoliosSortEnumAlphabetical GetPortfoliosSortEnum = "alphabetical"
	GetPortfoliosSortEnumDate         GetPortfoliosSortEnum = "date"
)

type GetPortfoliosQueryParams struct {
	Direction *GetPortfoliosDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *float64                    `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                    `queryParam:"style=form,explode=true,name=per_page"`
	Query     *string                     `queryParam:"style=form,explode=true,name=query"`
	Sort      *GetPortfoliosSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetPortfoliosRequest struct {
	PathParams  GetPortfoliosPathParams
	QueryParams GetPortfoliosQueryParams
}

type GetPortfoliosResponse struct {
	ContentType string
	StatusCode  int64
	Portfolios  []shared.Portfolio
}

package operations

import (
"openapi/pkg/models/shared")


type GetPortfoliosAlt1DirectionEnum string

const (
    GetPortfoliosAlt1DirectionEnumAsc GetPortfoliosAlt1DirectionEnum = "asc"
GetPortfoliosAlt1DirectionEnumDesc GetPortfoliosAlt1DirectionEnum = "desc"
)



type GetPortfoliosAlt1SortEnum string

const (
    GetPortfoliosAlt1SortEnumAlphabetical GetPortfoliosAlt1SortEnum = "alphabetical"
GetPortfoliosAlt1SortEnumDate GetPortfoliosAlt1SortEnum = "date"
)


type GetPortfoliosAlt1QueryParams struct {
    Direction *GetPortfoliosAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *GetPortfoliosAlt1SortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetPortfoliosAlt1Request struct {
    QueryParams GetPortfoliosAlt1QueryParams 
    
}

type GetPortfoliosAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Portfolios []shared.Portfolio 
    
}


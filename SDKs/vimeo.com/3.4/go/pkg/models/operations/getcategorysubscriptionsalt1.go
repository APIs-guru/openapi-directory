package operations

import (
"openapi/pkg/models/shared")


type GetCategorySubscriptionsAlt1DirectionEnum string

const (
    GetCategorySubscriptionsAlt1DirectionEnumAsc GetCategorySubscriptionsAlt1DirectionEnum = "asc"
GetCategorySubscriptionsAlt1DirectionEnumDesc GetCategorySubscriptionsAlt1DirectionEnum = "desc"
)



type GetCategorySubscriptionsAlt1SortEnum string

const (
    GetCategorySubscriptionsAlt1SortEnumAlphabetical GetCategorySubscriptionsAlt1SortEnum = "alphabetical"
GetCategorySubscriptionsAlt1SortEnumDate GetCategorySubscriptionsAlt1SortEnum = "date"
GetCategorySubscriptionsAlt1SortEnumName GetCategorySubscriptionsAlt1SortEnum = "name"
)


type GetCategorySubscriptionsAlt1QueryParams struct {
    Direction *GetCategorySubscriptionsAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *GetCategorySubscriptionsAlt1SortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetCategorySubscriptionsAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetCategorySubscriptionsAlt1Request struct {
    QueryParams GetCategorySubscriptionsAlt1QueryParams 
    Security GetCategorySubscriptionsAlt1Security 
    
}

type GetCategorySubscriptionsAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Categories []shared.Category 
    Error *shared.Error 
    
}


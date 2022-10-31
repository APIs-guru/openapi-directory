package operations

import (
"openapi/pkg/models/shared")

type GetPortfolioVideosPathParams struct {
    PortfolioID float64 `pathParam:"style=simple,explode=false,name=portfolio_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}


type GetPortfolioVideosFilterEnum string

const (
    GetPortfolioVideosFilterEnumEmbeddable GetPortfolioVideosFilterEnum = "embeddable"
)



type GetPortfolioVideosSortEnum string

const (
    GetPortfolioVideosSortEnumAlphabetical GetPortfolioVideosSortEnum = "alphabetical"
GetPortfolioVideosSortEnumComments GetPortfolioVideosSortEnum = "comments"
GetPortfolioVideosSortEnumDate GetPortfolioVideosSortEnum = "date"
GetPortfolioVideosSortEnumDefault GetPortfolioVideosSortEnum = "default"
GetPortfolioVideosSortEnumLikes GetPortfolioVideosSortEnum = "likes"
GetPortfolioVideosSortEnumManual GetPortfolioVideosSortEnum = "manual"
GetPortfolioVideosSortEnumPlays GetPortfolioVideosSortEnum = "plays"
)


type GetPortfolioVideosQueryParams struct {
    ContainingURI *string `queryParam:"style=form,explode=true,name=containing_uri"`
    Filter *GetPortfolioVideosFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    FilterEmbeddable *bool `queryParam:"style=form,explode=true,name=filter_embeddable"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *GetPortfolioVideosSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetPortfolioVideosRequest struct {
    PathParams GetPortfolioVideosPathParams 
    QueryParams GetPortfolioVideosQueryParams 
    
}

type GetPortfolioVideosResponse struct {
    ContentType string 
    StatusCode int64 
    Videos []shared.Video 
    
}


package operations

import (
"openapi/pkg/models/shared")


type GetLikesAlt1FilterEnum string

const (
    GetLikesAlt1FilterEnumEmbeddable GetLikesAlt1FilterEnum = "embeddable"
)



type GetLikesAlt1SortEnum string

const (
    GetLikesAlt1SortEnumAlphabetical GetLikesAlt1SortEnum = "alphabetical"
GetLikesAlt1SortEnumComments GetLikesAlt1SortEnum = "comments"
GetLikesAlt1SortEnumDate GetLikesAlt1SortEnum = "date"
GetLikesAlt1SortEnumDuration GetLikesAlt1SortEnum = "duration"
GetLikesAlt1SortEnumLikes GetLikesAlt1SortEnum = "likes"
GetLikesAlt1SortEnumPlays GetLikesAlt1SortEnum = "plays"
)


type GetLikesAlt1QueryParams struct {
    Filter *GetLikesAlt1FilterEnum `queryParam:"style=form,explode=true,name=filter"`
    FilterEmbeddable *bool `queryParam:"style=form,explode=true,name=filter_embeddable"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *GetLikesAlt1SortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetLikesAlt1Request struct {
    QueryParams GetLikesAlt1QueryParams 
    
}

type GetLikesAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Videos []shared.Video 
    
}


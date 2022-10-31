package operations

import (
"openapi/pkg/models/shared")


type GetWatchLaterQueueAlt1DirectionEnum string

const (
    GetWatchLaterQueueAlt1DirectionEnumAsc GetWatchLaterQueueAlt1DirectionEnum = "asc"
GetWatchLaterQueueAlt1DirectionEnumDesc GetWatchLaterQueueAlt1DirectionEnum = "desc"
)



type GetWatchLaterQueueAlt1FilterEnum string

const (
    GetWatchLaterQueueAlt1FilterEnumEmbeddable GetWatchLaterQueueAlt1FilterEnum = "embeddable"
)



type GetWatchLaterQueueAlt1SortEnum string

const (
    GetWatchLaterQueueAlt1SortEnumAlphabetical GetWatchLaterQueueAlt1SortEnum = "alphabetical"
GetWatchLaterQueueAlt1SortEnumComments GetWatchLaterQueueAlt1SortEnum = "comments"
GetWatchLaterQueueAlt1SortEnumDate GetWatchLaterQueueAlt1SortEnum = "date"
GetWatchLaterQueueAlt1SortEnumDuration GetWatchLaterQueueAlt1SortEnum = "duration"
GetWatchLaterQueueAlt1SortEnumLikes GetWatchLaterQueueAlt1SortEnum = "likes"
GetWatchLaterQueueAlt1SortEnumPlays GetWatchLaterQueueAlt1SortEnum = "plays"
)


type GetWatchLaterQueueAlt1QueryParams struct {
    Direction *GetWatchLaterQueueAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Filter *GetWatchLaterQueueAlt1FilterEnum `queryParam:"style=form,explode=true,name=filter"`
    FilterEmbeddable *bool `queryParam:"style=form,explode=true,name=filter_embeddable"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *GetWatchLaterQueueAlt1SortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetWatchLaterQueueAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetWatchLaterQueueAlt1Request struct {
    QueryParams GetWatchLaterQueueAlt1QueryParams 
    Security GetWatchLaterQueueAlt1Security 
    
}

type GetWatchLaterQueueAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Videos []shared.Video 
    
}


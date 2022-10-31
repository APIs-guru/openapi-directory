package operations

import (
"openapi/pkg/models/shared")

type GetWatchLaterQueuePathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}


type GetWatchLaterQueueDirectionEnum string

const (
    GetWatchLaterQueueDirectionEnumAsc GetWatchLaterQueueDirectionEnum = "asc"
GetWatchLaterQueueDirectionEnumDesc GetWatchLaterQueueDirectionEnum = "desc"
)



type GetWatchLaterQueueFilterEnum string

const (
    GetWatchLaterQueueFilterEnumEmbeddable GetWatchLaterQueueFilterEnum = "embeddable"
)



type GetWatchLaterQueueSortEnum string

const (
    GetWatchLaterQueueSortEnumAlphabetical GetWatchLaterQueueSortEnum = "alphabetical"
GetWatchLaterQueueSortEnumComments GetWatchLaterQueueSortEnum = "comments"
GetWatchLaterQueueSortEnumDate GetWatchLaterQueueSortEnum = "date"
GetWatchLaterQueueSortEnumDuration GetWatchLaterQueueSortEnum = "duration"
GetWatchLaterQueueSortEnumLikes GetWatchLaterQueueSortEnum = "likes"
GetWatchLaterQueueSortEnumPlays GetWatchLaterQueueSortEnum = "plays"
)


type GetWatchLaterQueueQueryParams struct {
    Direction *GetWatchLaterQueueDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Filter *GetWatchLaterQueueFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    FilterEmbeddable *bool `queryParam:"style=form,explode=true,name=filter_embeddable"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *GetWatchLaterQueueSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetWatchLaterQueueSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetWatchLaterQueueRequest struct {
    PathParams GetWatchLaterQueuePathParams 
    QueryParams GetWatchLaterQueueQueryParams 
    Security GetWatchLaterQueueSecurity 
    
}

type GetWatchLaterQueueResponse struct {
    ContentType string 
    StatusCode int64 
    Videos []shared.Video 
    
}


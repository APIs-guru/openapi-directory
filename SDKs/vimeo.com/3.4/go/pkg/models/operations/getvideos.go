package operations

import (
"openapi/pkg/models/shared")

type GetVideosPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}


type GetVideosDirectionEnum string

const (
    GetVideosDirectionEnumAsc GetVideosDirectionEnum = "asc"
GetVideosDirectionEnumDesc GetVideosDirectionEnum = "desc"
)



type GetVideosFilterEnum string

const (
    GetVideosFilterEnumAppOnly GetVideosFilterEnum = "app_only"
GetVideosFilterEnumEmbeddable GetVideosFilterEnum = "embeddable"
GetVideosFilterEnumFeatured GetVideosFilterEnum = "featured"
GetVideosFilterEnumPlayable GetVideosFilterEnum = "playable"
)



type GetVideosSortEnum string

const (
    GetVideosSortEnumAlphabetical GetVideosSortEnum = "alphabetical"
GetVideosSortEnumComments GetVideosSortEnum = "comments"
GetVideosSortEnumDate GetVideosSortEnum = "date"
GetVideosSortEnumDefault GetVideosSortEnum = "default"
GetVideosSortEnumDuration GetVideosSortEnum = "duration"
GetVideosSortEnumLastUserActionEventDate GetVideosSortEnum = "last_user_action_event_date"
GetVideosSortEnumLikes GetVideosSortEnum = "likes"
GetVideosSortEnumModifiedTime GetVideosSortEnum = "modified_time"
GetVideosSortEnumPlays GetVideosSortEnum = "plays"
)


type GetVideosQueryParams struct {
    ContainingURI *string `queryParam:"style=form,explode=true,name=containing_uri"`
    Direction *GetVideosDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Filter *GetVideosFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    FilterEmbeddable *bool `queryParam:"style=form,explode=true,name=filter_embeddable"`
    FilterPlayable *bool `queryParam:"style=form,explode=true,name=filter_playable"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *GetVideosSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetVideosRequest struct {
    PathParams GetVideosPathParams 
    QueryParams GetVideosQueryParams 
    
}

type GetVideosResponse struct {
    ContentType string 
    StatusCode int64 
    Videos []shared.Video 
    
}


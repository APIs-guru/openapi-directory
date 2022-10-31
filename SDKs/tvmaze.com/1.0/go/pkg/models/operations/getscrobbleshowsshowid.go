package operations

import (
"openapi/pkg/models/shared")

type GetScrobbleShowsShowIDPathParams struct {
    ShowID int64 `pathParam:"style=simple,explode=false,name=show_id"`
    
}


type GetScrobbleShowsShowIDEmbedEnum string

const (
    GetScrobbleShowsShowIDEmbedEnumEpisode GetScrobbleShowsShowIDEmbedEnum = "episode"
)


type GetScrobbleShowsShowIDQueryParams struct {
    Embed *GetScrobbleShowsShowIDEmbedEnum `queryParam:"style=form,explode=true,name=embed"`
    
}

type GetScrobbleShowsShowIDRequest struct {
    PathParams GetScrobbleShowsShowIDPathParams 
    QueryParams GetScrobbleShowsShowIDQueryParams 
    
}

type GetScrobbleShowsShowIDResponse struct {
    ContentType string 
    MarkedEpisodes []shared.MarkedEpisode 
    StatusCode int64 
    
}


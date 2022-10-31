package operations

import (
"openapi/pkg/models/shared")


type GetUserFollowsShowsEmbedEnum string

const (
    GetUserFollowsShowsEmbedEnumShow GetUserFollowsShowsEmbedEnum = "show"
)


type GetUserFollowsShowsQueryParams struct {
    Embed *GetUserFollowsShowsEmbedEnum `queryParam:"style=form,explode=true,name=embed"`
    
}

type GetUserFollowsShowsRequest struct {
    QueryParams GetUserFollowsShowsQueryParams 
    
}

type GetUserFollowsShowsResponse struct {
    ContentType string 
    ShowFollows []shared.ShowFollow 
    StatusCode int64 
    
}


package operations

import (
"openapi/pkg/models/shared")


type GetUserFollowsWebchannelsEmbedEnum string

const (
    GetUserFollowsWebchannelsEmbedEnumWebchannel GetUserFollowsWebchannelsEmbedEnum = "webchannel"
)


type GetUserFollowsWebchannelsQueryParams struct {
    Embed *GetUserFollowsWebchannelsEmbedEnum `queryParam:"style=form,explode=true,name=embed"`
    
}

type GetUserFollowsWebchannelsRequest struct {
    QueryParams GetUserFollowsWebchannelsQueryParams 
    
}

type GetUserFollowsWebchannelsResponse struct {
    ContentType string 
    StatusCode int64 
    WebchannelFollows []shared.WebchannelFollow 
    
}


package operations

import (
"openapi/pkg/models/shared")


type GetUserFollowsNetworksEmbedEnum string

const (
    GetUserFollowsNetworksEmbedEnumNetwork GetUserFollowsNetworksEmbedEnum = "network"
)


type GetUserFollowsNetworksQueryParams struct {
    Embed *GetUserFollowsNetworksEmbedEnum `queryParam:"style=form,explode=true,name=embed"`
    
}

type GetUserFollowsNetworksRequest struct {
    QueryParams GetUserFollowsNetworksQueryParams 
    
}

type GetUserFollowsNetworksResponse struct {
    ContentType string 
    NetworkFollows []shared.NetworkFollow 
    StatusCode int64 
    
}


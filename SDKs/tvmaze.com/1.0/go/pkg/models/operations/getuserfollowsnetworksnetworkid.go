package operations

import (
"openapi/pkg/models/shared")

type GetUserFollowsNetworksNetworkIDPathParams struct {
    NetworkID int64 `pathParam:"style=simple,explode=false,name=network_id"`
    
}

type GetUserFollowsNetworksNetworkIDRequest struct {
    PathParams GetUserFollowsNetworksNetworkIDPathParams 
    
}

type GetUserFollowsNetworksNetworkIDResponse struct {
    ContentType string 
    NetworkFollow *shared.NetworkFollow 
    StatusCode int64 
    
}


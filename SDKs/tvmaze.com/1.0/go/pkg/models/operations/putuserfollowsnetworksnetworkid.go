package operations

import (
	"openapi/pkg/models/shared"
)

type PutUserFollowsNetworksNetworkIDPathParams struct {
	NetworkID int64 `pathParam:"style=simple,explode=false,name=network_id"`
}

type PutUserFollowsNetworksNetworkIDRequest struct {
	PathParams PutUserFollowsNetworksNetworkIDPathParams
}

type PutUserFollowsNetworksNetworkIDResponse struct {
	ContentType   string
	NetworkFollow *shared.NetworkFollow
	StatusCode    int64
}

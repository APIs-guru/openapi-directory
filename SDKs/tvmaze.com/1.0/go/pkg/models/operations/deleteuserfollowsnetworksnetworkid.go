package operations

type DeleteUserFollowsNetworksNetworkIDPathParams struct {
	NetworkID int64 `pathParam:"style=simple,explode=false,name=network_id"`
}

type DeleteUserFollowsNetworksNetworkIDRequest struct {
	PathParams DeleteUserFollowsNetworksNetworkIDPathParams
}

type DeleteUserFollowsNetworksNetworkIDResponse struct {
	ContentType string
	StatusCode  int64
}

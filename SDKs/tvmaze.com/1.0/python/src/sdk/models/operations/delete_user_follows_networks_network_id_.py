from dataclasses import dataclass, field



@dataclass
class DeleteUserFollowsNetworksNetworkIDPathParams:
    network_id: int = field(default=None, metadata={'path_param': { 'field_name': 'network_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserFollowsNetworksNetworkIDRequest:
    path_params: DeleteUserFollowsNetworksNetworkIDPathParams = field(default=None)
    

@dataclass
class DeleteUserFollowsNetworksNetworkIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

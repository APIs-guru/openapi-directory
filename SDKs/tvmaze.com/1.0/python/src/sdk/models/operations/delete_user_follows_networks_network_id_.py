from dataclasses import dataclass, field



@dataclass
class DeleteUserFollowsNetworksNetworkIDPathParams:
    network_id: int = field(metadata={'path_param': { 'field_name': 'network_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserFollowsNetworksNetworkIDRequest:
    path_params: DeleteUserFollowsNetworksNetworkIDPathParams = field()
    

@dataclass
class DeleteUserFollowsNetworksNetworkIDResponse:
    content_type: str = field()
    status_code: int = field()
    

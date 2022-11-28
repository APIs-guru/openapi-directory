from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserFollowsNetworksNetworkIDPathParams:
    network_id: int = field(metadata={'path_param': { 'field_name': 'network_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserFollowsNetworksNetworkIDRequest:
    path_params: GetUserFollowsNetworksNetworkIDPathParams = field()
    

@dataclass
class GetUserFollowsNetworksNetworkIDResponse:
    content_type: str = field()
    status_code: int = field()
    network_follow: Optional[shared.NetworkFollow] = field(default=None)
    

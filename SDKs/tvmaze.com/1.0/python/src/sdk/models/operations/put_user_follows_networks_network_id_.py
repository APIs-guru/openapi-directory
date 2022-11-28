from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUserFollowsNetworksNetworkIDPathParams:
    network_id: int = field(metadata={'path_param': { 'field_name': 'network_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserFollowsNetworksNetworkIDRequest:
    path_params: PutUserFollowsNetworksNetworkIDPathParams = field()
    

@dataclass
class PutUserFollowsNetworksNetworkIDResponse:
    content_type: str = field()
    status_code: int = field()
    network_follow: Optional[shared.NetworkFollow] = field(default=None)
    

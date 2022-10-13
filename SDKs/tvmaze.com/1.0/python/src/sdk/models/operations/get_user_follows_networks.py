from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetUserFollowsNetworksEmbedEnum(str, Enum):
    NETWORK = "network"


@dataclass
class GetUserFollowsNetworksQueryParams:
    embed: Optional[GetUserFollowsNetworksEmbedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserFollowsNetworksRequest:
    query_params: GetUserFollowsNetworksQueryParams = field(default=None)
    

@dataclass
class GetUserFollowsNetworksResponse:
    content_type: str = field(default=None)
    network_follows: Optional[List[shared.NetworkFollow]] = field(default=None)
    status_code: int = field(default=None)
    

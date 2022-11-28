from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetUserFollowsNetworksEmbedEnum(str, Enum):
    NETWORK = "network"


@dataclass
class GetUserFollowsNetworksQueryParams:
    embed: Optional[GetUserFollowsNetworksEmbedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserFollowsNetworksRequest:
    query_params: GetUserFollowsNetworksQueryParams = field()
    

@dataclass
class GetUserFollowsNetworksResponse:
    content_type: str = field()
    status_code: int = field()
    network_follows: Optional[List[shared.NetworkFollow]] = field(default=None)
    

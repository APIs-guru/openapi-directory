from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetUserFollowsWebchannelsEmbedEnum(str, Enum):
    WEBCHANNEL = "webchannel"


@dataclass
class GetUserFollowsWebchannelsQueryParams:
    embed: Optional[GetUserFollowsWebchannelsEmbedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserFollowsWebchannelsRequest:
    query_params: GetUserFollowsWebchannelsQueryParams = field()
    

@dataclass
class GetUserFollowsWebchannelsResponse:
    content_type: str = field()
    status_code: int = field()
    webchannel_follows: Optional[List[shared.WebchannelFollow]] = field(default=None)
    

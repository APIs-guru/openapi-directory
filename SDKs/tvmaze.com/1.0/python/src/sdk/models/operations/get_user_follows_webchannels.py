from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetUserFollowsWebchannelsEmbedEnum(str, Enum):
    WEBCHANNEL = "webchannel"


@dataclass
class GetUserFollowsWebchannelsQueryParams:
    embed: Optional[GetUserFollowsWebchannelsEmbedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserFollowsWebchannelsRequest:
    query_params: GetUserFollowsWebchannelsQueryParams = field(default=None)
    

@dataclass
class GetUserFollowsWebchannelsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    webchannel_follows: Optional[List[shared.WebchannelFollow]] = field(default=None)
    

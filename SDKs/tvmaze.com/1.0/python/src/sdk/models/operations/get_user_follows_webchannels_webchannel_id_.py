from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserFollowsWebchannelsWebchannelIDPathParams:
    webchannel_id: int = field(metadata={'path_param': { 'field_name': 'webchannel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserFollowsWebchannelsWebchannelIDRequest:
    path_params: GetUserFollowsWebchannelsWebchannelIDPathParams = field()
    

@dataclass
class GetUserFollowsWebchannelsWebchannelIDResponse:
    content_type: str = field()
    status_code: int = field()
    webchannel_follow: Optional[shared.WebchannelFollow] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetChannelModeratorPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChannelModeratorRequest:
    path_params: GetChannelModeratorPathParams = field()
    

@dataclass
class GetChannelModeratorResponse:
    content_type: str = field()
    status_code: int = field()
    user: Optional[shared.User] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetChannelPathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChannelRequest:
    path_params: GetChannelPathParams = field(default=None)
    

@dataclass
class GetChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    channel: Optional[shared.Channel] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetChannelPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChannelRequest:
    path_params: GetChannelPathParams = field()
    

@dataclass
class GetChannelResponse:
    content_type: str = field()
    status_code: int = field()
    channel: Optional[shared.Channel] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UnsubscribeFromChannelPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnsubscribeFromChannelSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnsubscribeFromChannelRequest:
    path_params: UnsubscribeFromChannelPathParams = field()
    security: UnsubscribeFromChannelSecurity = field()
    

@dataclass
class UnsubscribeFromChannelResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

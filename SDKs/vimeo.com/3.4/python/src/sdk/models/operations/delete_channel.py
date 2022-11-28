from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteChannelPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteChannelSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteChannelRequest:
    path_params: DeleteChannelPathParams = field()
    security: DeleteChannelSecurity = field()
    

@dataclass
class DeleteChannelResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

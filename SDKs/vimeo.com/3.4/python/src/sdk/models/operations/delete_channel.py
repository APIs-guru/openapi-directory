from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteChannelPathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteChannelSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteChannelRequest:
    path_params: DeleteChannelPathParams = field(default=None)
    security: DeleteChannelSecurity = field(default=None)
    

@dataclass
class DeleteChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

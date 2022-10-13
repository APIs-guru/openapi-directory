from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddChannelModeratorPathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddChannelModeratorSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddChannelModeratorRequest:
    path_params: AddChannelModeratorPathParams = field(default=None)
    security: AddChannelModeratorSecurity = field(default=None)
    

@dataclass
class AddChannelModeratorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

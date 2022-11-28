from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddChannelModeratorPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddChannelModeratorSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddChannelModeratorRequest:
    path_params: AddChannelModeratorPathParams = field()
    security: AddChannelModeratorSecurity = field()
    

@dataclass
class AddChannelModeratorResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

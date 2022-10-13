from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SetChannelPrivacyUserPathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetChannelPrivacyUserSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetChannelPrivacyUserRequest:
    path_params: SetChannelPrivacyUserPathParams = field(default=None)
    security: SetChannelPrivacyUserSecurity = field(default=None)
    

@dataclass
class SetChannelPrivacyUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    

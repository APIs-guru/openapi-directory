from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SetChannelPrivacyUserPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetChannelPrivacyUserSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetChannelPrivacyUserRequest:
    path_params: SetChannelPrivacyUserPathParams = field()
    security: SetChannelPrivacyUserSecurity = field()
    

@dataclass
class SetChannelPrivacyUserResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    

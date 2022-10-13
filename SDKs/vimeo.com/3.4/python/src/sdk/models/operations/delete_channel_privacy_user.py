from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteChannelPrivacyUserPathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteChannelPrivacyUserSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteChannelPrivacyUserRequest:
    path_params: DeleteChannelPrivacyUserPathParams = field(default=None)
    security: DeleteChannelPrivacyUserSecurity = field(default=None)
    

@dataclass
class DeleteChannelPrivacyUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    

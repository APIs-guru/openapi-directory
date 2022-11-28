from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddVideoPrivacyUserPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoPrivacyUserSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoPrivacyUserRequest:
    path_params: AddVideoPrivacyUserPathParams = field()
    security: AddVideoPrivacyUserSecurity = field()
    

@dataclass
class AddVideoPrivacyUserResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    user: Optional[shared.User] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddVideoPrivacyUsersPathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoPrivacyUsersSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoPrivacyUsersRequest:
    path_params: AddVideoPrivacyUsersPathParams = field(default=None)
    security: AddVideoPrivacyUsersSecurity = field(default=None)
    

@dataclass
class AddVideoPrivacyUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    users: Optional[List[shared.User]] = field(default=None)
    

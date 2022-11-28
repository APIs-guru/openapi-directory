from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddVideoPrivacyUsersPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoPrivacyUsersSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoPrivacyUsersRequest:
    path_params: AddVideoPrivacyUsersPathParams = field()
    security: AddVideoPrivacyUsersSecurity = field()
    

@dataclass
class AddVideoPrivacyUsersResponse:
    content_type: str = field()
    status_code: int = field()
    users: Optional[List[shared.User]] = field(default=None)
    

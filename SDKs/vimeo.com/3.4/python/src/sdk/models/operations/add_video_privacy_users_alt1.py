from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddVideoPrivacyUsersAlt1PathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoPrivacyUsersAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoPrivacyUsersAlt1Request:
    path_params: AddVideoPrivacyUsersAlt1PathParams = field(default=None)
    security: AddVideoPrivacyUsersAlt1Security = field(default=None)
    

@dataclass
class AddVideoPrivacyUsersAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    users: Optional[List[shared.User]] = field(default=None)
    

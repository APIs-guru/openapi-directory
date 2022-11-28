from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddVideoPrivacyUsersAlt1PathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoPrivacyUsersAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoPrivacyUsersAlt1Request:
    path_params: AddVideoPrivacyUsersAlt1PathParams = field()
    security: AddVideoPrivacyUsersAlt1Security = field()
    

@dataclass
class AddVideoPrivacyUsersAlt1Response:
    content_type: str = field()
    status_code: int = field()
    users: Optional[List[shared.User]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SetChannelPrivacyUsersPathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SetChannelPrivacyUsersRequestBody:
    users: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    

@dataclass
class SetChannelPrivacyUsersSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetChannelPrivacyUsersRequest:
    path_params: SetChannelPrivacyUsersPathParams = field(default=None)
    request: SetChannelPrivacyUsersRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.user+json' }})
    security: SetChannelPrivacyUsersSecurity = field(default=None)
    

@dataclass
class SetChannelPrivacyUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    users: Optional[List[shared.User]] = field(default=None)
    

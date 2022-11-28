from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SetChannelPrivacyUsersPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SetChannelPrivacyUsersRequestBody:
    users: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclass
class SetChannelPrivacyUsersSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetChannelPrivacyUsersRequest:
    path_params: SetChannelPrivacyUsersPathParams = field()
    request: SetChannelPrivacyUsersRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.user+json' }})
    security: SetChannelPrivacyUsersSecurity = field()
    

@dataclass
class SetChannelPrivacyUsersResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    users: Optional[List[shared.User]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class FollowUsersPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class FollowUsersRequestBody:
    users: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclass
class FollowUsersSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FollowUsersRequest:
    path_params: FollowUsersPathParams = field()
    request: FollowUsersRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: FollowUsersSecurity = field()
    

@dataclass
class FollowUsersResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    

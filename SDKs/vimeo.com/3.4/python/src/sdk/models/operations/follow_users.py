from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class FollowUsersPathParams:
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class FollowUsersRequestBody:
    users: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    

@dataclass
class FollowUsersSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FollowUsersRequest:
    path_params: FollowUsersPathParams = field(default=None)
    request: FollowUsersRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: FollowUsersSecurity = field(default=None)
    

@dataclass
class FollowUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    

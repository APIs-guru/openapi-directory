from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class FollowUsersAlt1RequestBody:
    users: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    

@dataclass
class FollowUsersAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FollowUsersAlt1Request:
    request: FollowUsersAlt1RequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: FollowUsersAlt1Security = field(default=None)
    

@dataclass
class FollowUsersAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    

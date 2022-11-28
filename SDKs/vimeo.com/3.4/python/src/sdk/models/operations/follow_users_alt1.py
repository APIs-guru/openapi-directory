from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class FollowUsersAlt1RequestBody:
    users: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclass
class FollowUsersAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FollowUsersAlt1Request:
    request: FollowUsersAlt1RequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: FollowUsersAlt1Security = field()
    

@dataclass
class FollowUsersAlt1Response:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userinfo


@dataclass_json
@dataclass
class AccessTokenResponse:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    entity_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityIds' }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_in' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_token' }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_type' }})
    user_info: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_info' }})
    

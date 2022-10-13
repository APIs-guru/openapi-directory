from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuthResponse:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    entity_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityIds' }})
    expires_in: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_in' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_token' }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    token_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_type' }})
    

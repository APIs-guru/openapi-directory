from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import api_app
from . import user

class AuthTokenTypeEnum(str, Enum):
    BEARER = "bearer"


@dataclass_json
@dataclass
class Auth:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    app: api_app.APIApp = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app' }})
    expires_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_on' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_token' }})
    scope: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    token_type: AuthTokenTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_type' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

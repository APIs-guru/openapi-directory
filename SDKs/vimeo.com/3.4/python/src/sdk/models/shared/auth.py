from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AuthTokenTypeEnum(str, Enum):
    BEARER = "bearer"


@dataclass_json
@dataclass
class Auth:
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    app: APIApp = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app') }})
    scope: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    token_type: AuthTokenTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type') }})
    expires_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_on') }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

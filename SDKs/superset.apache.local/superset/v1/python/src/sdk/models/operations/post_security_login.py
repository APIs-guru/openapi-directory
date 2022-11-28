from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostSecurityLoginRequestBodyProviderEnum(str, Enum):
    DB = "db"
    LDAP = "ldap"


@dataclass_json
@dataclass
class PostSecurityLoginRequestBody:
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    provider: Optional[PostSecurityLoginRequestBodyProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    refresh: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class PostSecurityLogin200ApplicationJSON:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    

@dataclass_json
@dataclass
class PostSecurityLogin400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostSecurityLogin401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostSecurityLogin500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostSecurityLoginRequest:
    request: PostSecurityLoginRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSecurityLoginResponse:
    content_type: str = field()
    status_code: int = field()
    post_security_login_200_application_json_object: Optional[PostSecurityLogin200ApplicationJSON] = field(default=None)
    post_security_login_400_application_json_object: Optional[PostSecurityLogin400ApplicationJSON] = field(default=None)
    post_security_login_401_application_json_object: Optional[PostSecurityLogin401ApplicationJSON] = field(default=None)
    post_security_login_500_application_json_object: Optional[PostSecurityLogin500ApplicationJSON] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PostSecurityLoginRequestBodyProviderEnum(str, Enum):
    DB = "db"
    LDAP = "ldap"


@dataclass_json
@dataclass
class PostSecurityLoginRequestBody:
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    provider: Optional[PostSecurityLoginRequestBodyProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    refresh: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass
class PostSecurityLoginRequest:
    request: PostSecurityLoginRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostSecurityLogin200ApplicationJSON:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_token' }})
    

@dataclass_json
@dataclass
class PostSecurityLogin400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostSecurityLogin401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostSecurityLogin500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostSecurityLoginResponse:
    content_type: str = field(default=None)
    post_security_login_200_application_json_object: Optional[PostSecurityLogin200ApplicationJSON] = field(default=None)
    post_security_login_400_application_json_object: Optional[PostSecurityLogin400ApplicationJSON] = field(default=None)
    post_security_login_401_application_json_object: Optional[PostSecurityLogin401ApplicationJSON] = field(default=None)
    post_security_login_500_application_json_object: Optional[PostSecurityLogin500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    

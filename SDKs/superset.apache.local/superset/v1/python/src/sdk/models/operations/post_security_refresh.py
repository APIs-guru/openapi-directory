from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PostSecurityRefreshSecurity:
    jwt_refresh: shared.SchemeJwtRefresh = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostSecurityRefreshRequest:
    security: PostSecurityRefreshSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostSecurityRefresh200ApplicationJSON:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    

@dataclass_json
@dataclass
class PostSecurityRefresh401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostSecurityRefresh500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostSecurityRefreshResponse:
    content_type: str = field(default=None)
    post_security_refresh_200_application_json_object: Optional[PostSecurityRefresh200ApplicationJSON] = field(default=None)
    post_security_refresh_401_application_json_object: Optional[PostSecurityRefresh401ApplicationJSON] = field(default=None)
    post_security_refresh_500_application_json_object: Optional[PostSecurityRefresh500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    

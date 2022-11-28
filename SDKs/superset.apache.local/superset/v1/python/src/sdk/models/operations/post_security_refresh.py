from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostSecurityRefreshSecurity:
    jwt_refresh: shared.SchemeJwtRefresh = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PostSecurityRefresh200ApplicationJSON:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    

@dataclass_json
@dataclass
class PostSecurityRefresh401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostSecurityRefresh500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostSecurityRefreshRequest:
    security: PostSecurityRefreshSecurity = field()
    

@dataclass
class PostSecurityRefreshResponse:
    content_type: str = field()
    status_code: int = field()
    post_security_refresh_200_application_json_object: Optional[PostSecurityRefresh200ApplicationJSON] = field(default=None)
    post_security_refresh_401_application_json_object: Optional[PostSecurityRefresh401ApplicationJSON] = field(default=None)
    post_security_refresh_500_application_json_object: Optional[PostSecurityRefresh500ApplicationJSON] = field(default=None)
    

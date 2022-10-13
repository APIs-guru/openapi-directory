from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetSecurityCsrfTokenSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetSecurityCsrfTokenRequest:
    security: GetSecurityCsrfTokenSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetSecurityCsrfToken200ApplicationJSON:
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class GetSecurityCsrfToken401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSecurityCsrfToken500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetSecurityCsrfTokenResponse:
    content_type: str = field(default=None)
    get_security_csrf_token_200_application_json_object: Optional[GetSecurityCsrfToken200ApplicationJSON] = field(default=None)
    get_security_csrf_token_401_application_json_object: Optional[GetSecurityCsrfToken401ApplicationJSON] = field(default=None)
    get_security_csrf_token_500_application_json_object: Optional[GetSecurityCsrfToken500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    

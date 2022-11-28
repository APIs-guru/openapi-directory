from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSecurityCsrfTokenSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetSecurityCsrfToken200ApplicationJSON:
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class GetSecurityCsrfToken401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetSecurityCsrfToken500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetSecurityCsrfTokenRequest:
    security: GetSecurityCsrfTokenSecurity = field()
    

@dataclass
class GetSecurityCsrfTokenResponse:
    content_type: str = field()
    status_code: int = field()
    get_security_csrf_token_200_application_json_object: Optional[GetSecurityCsrfToken200ApplicationJSON] = field(default=None)
    get_security_csrf_token_401_application_json_object: Optional[GetSecurityCsrfToken401ApplicationJSON] = field(default=None)
    get_security_csrf_token_500_application_json_object: Optional[GetSecurityCsrfToken500ApplicationJSON] = field(default=None)
    

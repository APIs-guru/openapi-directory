from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_VALIDATION_REQUEST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateValidationRequestPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateValidationRequestSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateValidationRequestRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateValidationRequestPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateValidationRequestSecurity = field(default=None)
    

@dataclass
class CreateValidationRequestResponses:
    api_v2010_account_validation_request: Optional[shared.APIV2010AccountValidationRequest] = field(default=None)
    

@dataclass
class CreateValidationRequestResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateValidationRequestResponses]] = field(default=None)
    status_code: int = field(default=None)
    

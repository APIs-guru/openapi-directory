from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_VALIDATION_REQUEST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateValidationRequestPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateValidationRequestCreateValidationRequestRequest:
    call_delay: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CallDelay' }})
    extension: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Extension' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    phone_number: str = field(default=None, metadata={'form': { 'field_name': 'PhoneNumber' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    

@dataclass
class CreateValidationRequestSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateValidationRequestRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateValidationRequestPathParams = field(default=None)
    request: Optional[CreateValidationRequestCreateValidationRequestRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateValidationRequestSecurity = field(default=None)
    

@dataclass
class CreateValidationRequestResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_validation_request: Optional[shared.APIV2010AccountValidationRequest] = field(default=None)
    

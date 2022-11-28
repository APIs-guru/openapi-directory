from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_VALIDATION_REQUEST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateValidationRequestPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateValidationRequestCreateValidationRequestRequest:
    phone_number: str = field(metadata={'form': { 'field_name': 'PhoneNumber' }})
    call_delay: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CallDelay' }})
    extension: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Extension' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    

@dataclass
class CreateValidationRequestSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateValidationRequestRequest:
    path_params: CreateValidationRequestPathParams = field()
    security: CreateValidationRequestSecurity = field()
    request: Optional[CreateValidationRequestCreateValidationRequestRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateValidationRequestResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_validation_request: Optional[shared.APIV2010AccountValidationRequest] = field(default=None)
    

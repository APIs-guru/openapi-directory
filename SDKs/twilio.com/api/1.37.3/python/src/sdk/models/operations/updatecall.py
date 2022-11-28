from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_CALL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateCallPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateCallUpdateCallRequestFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateCallUpdateCallRequestMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateCallUpdateCallRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateCallUpdateCallRequest:
    fallback_method: Optional[UpdateCallUpdateCallRequestFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'FallbackMethod' }})
    fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FallbackUrl' }})
    method: Optional[UpdateCallUpdateCallRequestMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Method' }})
    status: Optional[shared.CallEnumUpdateStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[UpdateCallUpdateCallRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    time_limit: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'TimeLimit' }})
    twiml: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Twiml' }})
    url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Url' }})
    

@dataclass
class UpdateCallSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCallRequest:
    path_params: UpdateCallPathParams = field()
    security: UpdateCallSecurity = field()
    request: Optional[UpdateCallUpdateCallRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateCallResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_call: Optional[shared.APIV2010AccountCall] = field(default=None)
    

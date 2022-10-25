from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_FUNCTION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class UpdateFunctionPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFunctionUpdateFunctionRequest:
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateFunctionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateFunctionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateFunctionPathParams = field(default=None)
    request: Optional[UpdateFunctionUpdateFunctionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateFunctionSecurity = field(default=None)
    

@dataclass
class UpdateFunctionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    serverless_v1_service_function: Optional[shared.ServerlessV1ServiceFunction] = field(default=None)
    

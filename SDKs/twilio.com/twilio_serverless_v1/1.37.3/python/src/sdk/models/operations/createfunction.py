from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_FUNCTION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class CreateFunctionPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFunctionCreateFunctionRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateFunctionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateFunctionRequest:
    path_params: CreateFunctionPathParams = field()
    security: CreateFunctionSecurity = field()
    request: Optional[CreateFunctionCreateFunctionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateFunctionResponse:
    content_type: str = field()
    status_code: int = field()
    serverless_v1_service_function: Optional[shared.ServerlessV1ServiceFunction] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_FUNCTION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class CreateFunctionPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFunctionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateFunctionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateFunctionPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateFunctionSecurity = field(default=None)
    

@dataclass
class CreateFunctionResponses:
    serverless_v1_service_function: Optional[shared.ServerlessV1ServiceFunction] = field(default=None)
    

@dataclass
class CreateFunctionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateFunctionResponses]] = field(default=None)
    status_code: int = field(default=None)
    

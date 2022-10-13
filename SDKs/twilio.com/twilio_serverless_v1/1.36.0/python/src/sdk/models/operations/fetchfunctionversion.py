from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_FUNCTION_VERSION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class FetchFunctionVersionPathParams:
    function_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FunctionSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFunctionVersionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFunctionVersionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchFunctionVersionPathParams = field(default=None)
    security: FetchFunctionVersionSecurity = field(default=None)
    

@dataclass
class FetchFunctionVersionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    serverless_v1_service_function_function_version: Optional[shared.ServerlessV1ServiceFunctionFunctionVersion] = field(default=None)
    

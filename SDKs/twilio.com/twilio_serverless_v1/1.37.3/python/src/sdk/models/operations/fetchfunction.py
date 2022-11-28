from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_FUNCTION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class FetchFunctionPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFunctionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFunctionRequest:
    path_params: FetchFunctionPathParams = field()
    security: FetchFunctionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchFunctionResponse:
    content_type: str = field()
    status_code: int = field()
    serverless_v1_service_function: Optional[shared.ServerlessV1ServiceFunction] = field(default=None)
    

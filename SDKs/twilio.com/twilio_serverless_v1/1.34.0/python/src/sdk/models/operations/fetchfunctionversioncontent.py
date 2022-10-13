from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_FUNCTION_VERSION_CONTENT_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class FetchFunctionVersionContentPathParams:
    function_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FunctionSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFunctionVersionContentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFunctionVersionContentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchFunctionVersionContentPathParams = field(default=None)
    security: FetchFunctionVersionContentSecurity = field(default=None)
    

@dataclass
class FetchFunctionVersionContentResponses:
    serverless_v1_service_function_function_version_function_version_content: Optional[shared.ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent] = field(default=None)
    

@dataclass
class FetchFunctionVersionContentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchFunctionVersionContentResponses]] = field(default=None)
    status_code: int = field(default=None)
    

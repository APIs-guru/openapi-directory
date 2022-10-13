from dataclasses import dataclass, field
from typing import Optional
DELETE_FUNCTION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class DeleteFunctionPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFunctionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteFunctionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteFunctionPathParams = field(default=None)
    security: DeleteFunctionSecurity = field(default=None)
    

@dataclass
class DeleteFunctionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

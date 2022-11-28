from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_FUNCTION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class DeleteFunctionPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFunctionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteFunctionRequest:
    path_params: DeleteFunctionPathParams = field()
    security: DeleteFunctionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteFunctionResponse:
    content_type: str = field()
    status_code: int = field()
    

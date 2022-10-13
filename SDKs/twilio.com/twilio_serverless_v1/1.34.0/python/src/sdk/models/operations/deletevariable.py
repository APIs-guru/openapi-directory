from dataclasses import dataclass, field
from typing import Optional
DELETE_VARIABLE_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class DeleteVariablePathParams:
    environment_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVariableSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteVariableRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteVariablePathParams = field(default=None)
    security: DeleteVariableSecurity = field(default=None)
    

@dataclass
class DeleteVariableResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

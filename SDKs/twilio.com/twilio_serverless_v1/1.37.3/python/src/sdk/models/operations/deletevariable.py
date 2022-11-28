from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_VARIABLE_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class DeleteVariablePathParams:
    environment_sid: str = field(metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVariableSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteVariableRequest:
    path_params: DeleteVariablePathParams = field()
    security: DeleteVariableSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteVariableResponse:
    content_type: str = field()
    status_code: int = field()
    

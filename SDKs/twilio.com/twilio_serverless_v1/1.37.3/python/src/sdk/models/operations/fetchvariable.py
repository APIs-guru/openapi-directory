from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_VARIABLE_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class FetchVariablePathParams:
    environment_sid: str = field(metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchVariableSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchVariableRequest:
    path_params: FetchVariablePathParams = field()
    security: FetchVariableSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchVariableResponse:
    content_type: str = field()
    status_code: int = field()
    serverless_v1_service_environment_variable: Optional[shared.ServerlessV1ServiceEnvironmentVariable] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_VARIABLE_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class CreateVariablePathParams:
    environment_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateVariableRequestBodyCreateVariableRequest:
    key: str = field(default=None, metadata={'form': { 'field_name': 'Key' }})
    value: str = field(default=None, metadata={'form': { 'field_name': 'Value' }})
    

@dataclass
class CreateVariableSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateVariableRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateVariablePathParams = field(default=None)
    request: Optional[CreateVariableRequestBodyCreateVariableRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateVariableSecurity = field(default=None)
    

@dataclass
class CreateVariableResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    serverless_v1_service_environment_variable: Optional[shared.ServerlessV1ServiceEnvironmentVariable] = field(default=None)
    

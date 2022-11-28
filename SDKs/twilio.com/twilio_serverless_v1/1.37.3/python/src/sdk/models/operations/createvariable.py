from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_VARIABLE_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class CreateVariablePathParams:
    environment_sid: str = field(metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateVariableCreateVariableRequest:
    key: str = field(metadata={'form': { 'field_name': 'Key' }})
    value: str = field(metadata={'form': { 'field_name': 'Value' }})
    

@dataclass
class CreateVariableSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateVariableRequest:
    path_params: CreateVariablePathParams = field()
    security: CreateVariableSecurity = field()
    request: Optional[CreateVariableCreateVariableRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateVariableResponse:
    content_type: str = field()
    status_code: int = field()
    serverless_v1_service_environment_variable: Optional[shared.ServerlessV1ServiceEnvironmentVariable] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_VARIABLE_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class UpdateVariablePathParams:
    environment_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateVariableRequestBodyUpdateVariableRequest:
    key: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Key' }})
    value: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Value' }})
    

@dataclass
class UpdateVariableSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateVariableRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateVariablePathParams = field(default=None)
    request: Optional[UpdateVariableRequestBodyUpdateVariableRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateVariableSecurity = field(default=None)
    

@dataclass
class UpdateVariableResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    serverless_v1_service_environment_variable: Optional[shared.ServerlessV1ServiceEnvironmentVariable] = field(default=None)
    

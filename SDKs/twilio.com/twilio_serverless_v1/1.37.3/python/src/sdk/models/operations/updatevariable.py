from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_VARIABLE_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class UpdateVariablePathParams:
    environment_sid: str = field(metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateVariableUpdateVariableRequest:
    key: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Key' }})
    value: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Value' }})
    

@dataclass
class UpdateVariableSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateVariableRequest:
    path_params: UpdateVariablePathParams = field()
    security: UpdateVariableSecurity = field()
    request: Optional[UpdateVariableUpdateVariableRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateVariableResponse:
    content_type: str = field()
    status_code: int = field()
    serverless_v1_service_environment_variable: Optional[shared.ServerlessV1ServiceEnvironmentVariable] = field(default=None)
    

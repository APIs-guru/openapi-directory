from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_DEFAULTS_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateDefaultsPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDefaultsUpdateDefaultsRequest:
    defaults: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Defaults' }})
    

@dataclass
class UpdateDefaultsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDefaultsRequest:
    path_params: UpdateDefaultsPathParams = field()
    security: UpdateDefaultsSecurity = field()
    request: Optional[UpdateDefaultsUpdateDefaultsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateDefaultsResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_defaults: Optional[shared.AutopilotV1AssistantDefaults] = field(default=None)
    

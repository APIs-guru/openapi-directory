from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
UPDATE_DEFAULTS_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateDefaultsPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDefaultsUpdateDefaultsRequest:
    defaults: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Defaults' }})
    

@dataclass
class UpdateDefaultsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDefaultsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateDefaultsPathParams = field(default=None)
    request: Optional[UpdateDefaultsUpdateDefaultsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateDefaultsSecurity = field(default=None)
    

@dataclass
class UpdateDefaultsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    autopilot_v1_assistant_defaults: Optional[shared.AutopilotV1AssistantDefaults] = field(default=None)
    

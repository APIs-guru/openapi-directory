from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_QUERY_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateQueryPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateQueryRequestBodyUpdateQueryRequest:
    sample_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SampleSid' }})
    status: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateQuerySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateQueryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateQueryPathParams = field(default=None)
    request: Optional[UpdateQueryRequestBodyUpdateQueryRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateQuerySecurity = field(default=None)
    

@dataclass
class UpdateQueryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    autopilot_v1_assistant_query: Optional[shared.AutopilotV1AssistantQuery] = field(default=None)
    

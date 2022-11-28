from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_QUERY_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateQueryPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateQueryUpdateQueryRequest:
    sample_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SampleSid' }})
    status: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateQuerySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateQueryRequest:
    path_params: UpdateQueryPathParams = field()
    security: UpdateQuerySecurity = field()
    request: Optional[UpdateQueryUpdateQueryRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateQueryResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_query: Optional[shared.AutopilotV1AssistantQuery] = field(default=None)
    

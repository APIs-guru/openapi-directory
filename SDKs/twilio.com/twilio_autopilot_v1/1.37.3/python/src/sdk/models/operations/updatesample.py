from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_SAMPLE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateSamplePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSampleUpdateSampleRequest:
    language: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Language' }})
    source_channel: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SourceChannel' }})
    tagged_text: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TaggedText' }})
    

@dataclass
class UpdateSampleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSampleRequest:
    path_params: UpdateSamplePathParams = field()
    security: UpdateSampleSecurity = field()
    request: Optional[UpdateSampleUpdateSampleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSampleResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_task_sample: Optional[shared.AutopilotV1AssistantTaskSample] = field(default=None)
    

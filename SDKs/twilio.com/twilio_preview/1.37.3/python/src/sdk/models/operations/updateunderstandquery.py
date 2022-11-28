from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_UNDERSTAND_QUERY_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateUnderstandQueryPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUnderstandQueryUpdateUnderstandQueryRequest:
    sample_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SampleSid' }})
    status: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateUnderstandQuerySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUnderstandQueryRequest:
    path_params: UpdateUnderstandQueryPathParams = field()
    security: UpdateUnderstandQuerySecurity = field()
    request: Optional[UpdateUnderstandQueryUpdateUnderstandQueryRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateUnderstandQueryResponse:
    content_type: str = field()
    status_code: int = field()
    preview_understand_assistant_query: Optional[shared.PreviewUnderstandAssistantQuery] = field(default=None)
    

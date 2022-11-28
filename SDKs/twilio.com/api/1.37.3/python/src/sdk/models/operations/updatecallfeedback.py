from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


UPDATE_CALL_FEEDBACK_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateCallFeedbackPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCallFeedbackUpdateCallFeedbackRequest:
    issue: Optional[List[shared.CallFeedbackEnumIssuesEnum]] = field(default=None, metadata={'form': { 'field_name': 'Issue' }})
    quality_score: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'QualityScore' }})
    

@dataclass
class UpdateCallFeedbackSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCallFeedbackRequest:
    path_params: UpdateCallFeedbackPathParams = field()
    security: UpdateCallFeedbackSecurity = field()
    request: Optional[UpdateCallFeedbackUpdateCallFeedbackRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateCallFeedbackResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_call_call_feedback: Optional[shared.APIV2010AccountCallCallFeedback] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_CALL_FEEDBACK_SUMMARY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateCallFeedbackSummaryPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCallFeedbackSummarySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCallFeedbackSummaryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateCallFeedbackSummaryPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCallFeedbackSummarySecurity = field(default=None)
    

@dataclass
class CreateCallFeedbackSummaryResponses:
    api_v2010_account_call_call_feedback_summary: Optional[shared.APIV2010AccountCallCallFeedbackSummary] = field(default=None)
    

@dataclass
class CreateCallFeedbackSummaryResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateCallFeedbackSummaryResponses]] = field(default=None)
    status_code: int = field(default=None)
    

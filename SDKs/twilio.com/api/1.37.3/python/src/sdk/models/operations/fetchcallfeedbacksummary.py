from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CALL_FEEDBACK_SUMMARY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchCallFeedbackSummaryPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCallFeedbackSummarySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCallFeedbackSummaryRequest:
    path_params: FetchCallFeedbackSummaryPathParams = field()
    security: FetchCallFeedbackSummarySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchCallFeedbackSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_call_call_feedback_summary: Optional[shared.APIV2010AccountCallCallFeedbackSummary] = field(default=None)
    

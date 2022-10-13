from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CALL_FEEDBACK_SUMMARY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchCallFeedbackSummaryPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCallFeedbackSummarySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCallFeedbackSummaryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchCallFeedbackSummaryPathParams = field(default=None)
    security: FetchCallFeedbackSummarySecurity = field(default=None)
    

@dataclass
class FetchCallFeedbackSummaryResponses:
    api_v2010_account_call_call_feedback_summary: Optional[shared.APIV2010AccountCallCallFeedbackSummary] = field(default=None)
    

@dataclass
class FetchCallFeedbackSummaryResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchCallFeedbackSummaryResponses]] = field(default=None)
    status_code: int = field(default=None)
    

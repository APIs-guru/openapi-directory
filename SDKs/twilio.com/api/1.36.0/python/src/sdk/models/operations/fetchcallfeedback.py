from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CALL_FEEDBACK_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchCallFeedbackPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCallFeedbackSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCallFeedbackRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchCallFeedbackPathParams = field(default=None)
    security: FetchCallFeedbackSecurity = field(default=None)
    

@dataclass
class FetchCallFeedbackResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_call_call_feedback: Optional[shared.APIV2010AccountCallCallFeedback] = field(default=None)
    

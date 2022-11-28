from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CALL_FEEDBACK_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchCallFeedbackPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCallFeedbackSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCallFeedbackRequest:
    path_params: FetchCallFeedbackPathParams = field()
    security: FetchCallFeedbackSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchCallFeedbackResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_call_call_feedback: Optional[shared.APIV2010AccountCallCallFeedback] = field(default=None)
    

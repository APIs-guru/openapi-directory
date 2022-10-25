from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_MESSAGE_FEEDBACK_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateMessageFeedbackPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    message_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MessageSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateMessageFeedbackCreateMessageFeedbackRequest:
    outcome: Optional[shared.MessageFeedbackEnumOutcomeEnum] = field(default=None, metadata={'form': { 'field_name': 'Outcome' }})
    

@dataclass
class CreateMessageFeedbackSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMessageFeedbackRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateMessageFeedbackPathParams = field(default=None)
    request: Optional[CreateMessageFeedbackCreateMessageFeedbackRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateMessageFeedbackSecurity = field(default=None)
    

@dataclass
class CreateMessageFeedbackResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_message_message_feedback: Optional[shared.APIV2010AccountMessageMessageFeedback] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_USER_DEFINED_MESSAGE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateUserDefinedMessagePathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUserDefinedMessageCreateUserDefinedMessageRequest:
    content: str = field(metadata={'form': { 'field_name': 'Content' }})
    idempotency_key: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'IdempotencyKey' }})
    

@dataclass
class CreateUserDefinedMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUserDefinedMessageRequest:
    path_params: CreateUserDefinedMessagePathParams = field()
    security: CreateUserDefinedMessageSecurity = field()
    request: Optional[CreateUserDefinedMessageCreateUserDefinedMessageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateUserDefinedMessageResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_call_user_defined_message: Optional[shared.APIV2010AccountCallUserDefinedMessage] = field(default=None)
    

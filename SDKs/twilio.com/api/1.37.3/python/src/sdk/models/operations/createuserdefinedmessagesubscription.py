from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_USER_DEFINED_MESSAGE_SUBSCRIPTION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateUserDefinedMessageSubscriptionPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    
class CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest:
    callback: str = field(metadata={'form': { 'field_name': 'Callback' }})
    method: CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum = field(metadata={'form': { 'field_name': 'Method' }})
    idempotency_key: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'IdempotencyKey' }})
    

@dataclass
class CreateUserDefinedMessageSubscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUserDefinedMessageSubscriptionRequest:
    path_params: CreateUserDefinedMessageSubscriptionPathParams = field()
    security: CreateUserDefinedMessageSubscriptionSecurity = field()
    request: Optional[CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateUserDefinedMessageSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_call_user_defined_message_subscription: Optional[shared.APIV2010AccountCallUserDefinedMessageSubscription] = field(default=None)
    

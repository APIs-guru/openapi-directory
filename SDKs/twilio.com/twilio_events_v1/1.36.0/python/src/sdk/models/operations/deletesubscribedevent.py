from dataclasses import dataclass, field
from typing import Optional
DELETE_SUBSCRIBED_EVENT_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class DeleteSubscribedEventPathParams:
    subscription_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'SubscriptionSid', 'style': 'simple', 'explode': False }})
    type: str = field(default=None, metadata={'path_param': { 'field_name': 'Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSubscribedEventSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSubscribedEventRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSubscribedEventPathParams = field(default=None)
    security: DeleteSubscribedEventSecurity = field(default=None)
    

@dataclass
class DeleteSubscribedEventResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

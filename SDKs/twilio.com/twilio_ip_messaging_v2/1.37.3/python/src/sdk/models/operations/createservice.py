from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_SERVICE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class CreateServiceCreateServiceRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceRequest:
    security: CreateServiceSecurity = field()
    request: Optional[CreateServiceCreateServiceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateServiceResponse:
    content_type: str = field()
    status_code: int = field()
    ip_messaging_v2_service: Optional[shared.IPMessagingV2Service] = field(default=None)
    

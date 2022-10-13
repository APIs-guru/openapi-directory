from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SERVICE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateServiceSecurity = field(default=None)
    

@dataclass
class CreateServiceResponses:
    conversations_v1_service: Optional[shared.ConversationsV1Service] = field(default=None)
    

@dataclass
class CreateServiceResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateServiceResponses]] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
DELETE_US_APP_TO_PERSON_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class DeleteUsAppToPersonPathParams:
    messaging_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MessagingServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUsAppToPersonSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUsAppToPersonRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteUsAppToPersonPathParams = field(default=None)
    security: DeleteUsAppToPersonSecurity = field(default=None)
    

@dataclass
class DeleteUsAppToPersonResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_US_APP_TO_PERSON_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class DeleteUsAppToPersonPathParams:
    messaging_service_sid: str = field(metadata={'path_param': { 'field_name': 'MessagingServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUsAppToPersonSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUsAppToPersonRequest:
    path_params: DeleteUsAppToPersonPathParams = field()
    security: DeleteUsAppToPersonSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteUsAppToPersonResponse:
    content_type: str = field()
    status_code: int = field()
    

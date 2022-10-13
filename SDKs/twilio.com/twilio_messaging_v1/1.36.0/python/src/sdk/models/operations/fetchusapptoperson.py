from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_US_APP_TO_PERSON_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class FetchUsAppToPersonPathParams:
    messaging_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MessagingServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUsAppToPersonSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUsAppToPersonRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchUsAppToPersonPathParams = field(default=None)
    security: FetchUsAppToPersonSecurity = field(default=None)
    

@dataclass
class FetchUsAppToPersonResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    messaging_v1_service_us_app_to_person: Optional[shared.MessagingV1ServiceUsAppToPerson] = field(default=None)
    

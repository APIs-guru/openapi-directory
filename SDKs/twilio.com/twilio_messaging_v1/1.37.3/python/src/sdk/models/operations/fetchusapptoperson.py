from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_US_APP_TO_PERSON_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class FetchUsAppToPersonPathParams:
    messaging_service_sid: str = field(metadata={'path_param': { 'field_name': 'MessagingServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUsAppToPersonSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUsAppToPersonRequest:
    path_params: FetchUsAppToPersonPathParams = field()
    security: FetchUsAppToPersonSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUsAppToPersonResponse:
    content_type: str = field()
    status_code: int = field()
    messaging_v1_service_us_app_to_person: Optional[shared.MessagingV1ServiceUsAppToPerson] = field(default=None)
    

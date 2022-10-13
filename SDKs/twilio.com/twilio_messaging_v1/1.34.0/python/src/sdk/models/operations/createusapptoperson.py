from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_US_APP_TO_PERSON_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class CreateUsAppToPersonPathParams:
    messaging_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MessagingServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUsAppToPersonSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUsAppToPersonRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateUsAppToPersonPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateUsAppToPersonSecurity = field(default=None)
    

@dataclass
class CreateUsAppToPersonResponses:
    messaging_v1_service_us_app_to_person: Optional[shared.MessagingV1ServiceUsAppToPerson] = field(default=None)
    

@dataclass
class CreateUsAppToPersonResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateUsAppToPersonResponses]] = field(default=None)
    status_code: int = field(default=None)
    

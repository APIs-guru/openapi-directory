from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_USECASE_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class FetchUsecaseSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUsecaseRequest:
    security: FetchUsecaseSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchUsecaseResponse:
    content_type: str = field()
    status_code: int = field()
    messaging_v1_usecase: Optional[shared.MessagingV1Usecase] = field(default=None)
    

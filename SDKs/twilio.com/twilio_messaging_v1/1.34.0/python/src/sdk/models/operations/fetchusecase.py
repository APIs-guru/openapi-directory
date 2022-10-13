from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_USECASE_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class FetchUsecaseSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUsecaseRequest:
    server_url: Optional[str] = field(default=None)
    security: FetchUsecaseSecurity = field(default=None)
    

@dataclass
class FetchUsecaseResponses:
    messaging_v1_usecase: Optional[shared.MessagingV1Usecase] = field(default=None)
    

@dataclass
class FetchUsecaseResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchUsecaseResponses]] = field(default=None)
    status_code: int = field(default=None)
    

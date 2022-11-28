from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_QUEUE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchQueuePathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchQueueRequest:
    path_params: FetchQueuePathParams = field()
    security: FetchQueueSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchQueueResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_queue: Optional[shared.APIV2010AccountQueue] = field(default=None)
    

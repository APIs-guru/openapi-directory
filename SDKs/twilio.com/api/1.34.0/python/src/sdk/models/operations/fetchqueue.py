from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_QUEUE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchQueuePathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchQueueRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchQueuePathParams = field(default=None)
    security: FetchQueueSecurity = field(default=None)
    

@dataclass
class FetchQueueResponses:
    api_v2010_account_queue: Optional[shared.APIV2010AccountQueue] = field(default=None)
    

@dataclass
class FetchQueueResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchQueueResponses]] = field(default=None)
    status_code: int = field(default=None)
    

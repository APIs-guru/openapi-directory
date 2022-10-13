from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_QUEUE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateQueuePathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateQueueRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateQueuePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateQueueSecurity = field(default=None)
    

@dataclass
class CreateQueueResponses:
    api_v2010_account_queue: Optional[shared.APIV2010AccountQueue] = field(default=None)
    

@dataclass
class CreateQueueResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateQueueResponses]] = field(default=None)
    status_code: int = field(default=None)
    

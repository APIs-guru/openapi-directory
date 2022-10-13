from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_QUEUE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateQueuePathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateQueueRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateQueuePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateQueueSecurity = field(default=None)
    

@dataclass
class UpdateQueueResponses:
    api_v2010_account_queue: Optional[shared.APIV2010AccountQueue] = field(default=None)
    

@dataclass
class UpdateQueueResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateQueueResponses]] = field(default=None)
    status_code: int = field(default=None)
    

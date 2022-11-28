from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_QUEUE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateQueuePathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateQueueCreateQueueRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    max_size: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MaxSize' }})
    

@dataclass
class CreateQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateQueueRequest:
    path_params: CreateQueuePathParams = field()
    security: CreateQueueSecurity = field()
    request: Optional[CreateQueueCreateQueueRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateQueueResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_queue: Optional[shared.APIV2010AccountQueue] = field(default=None)
    

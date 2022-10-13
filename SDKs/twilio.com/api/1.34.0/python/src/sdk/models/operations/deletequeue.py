from dataclasses import dataclass, field
from typing import Optional
DELETE_QUEUE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteQueuePathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteQueueRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteQueuePathParams = field(default=None)
    security: DeleteQueueSecurity = field(default=None)
    

@dataclass
class DeleteQueueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

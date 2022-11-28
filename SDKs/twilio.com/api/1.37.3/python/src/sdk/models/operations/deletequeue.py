from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_QUEUE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteQueuePathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteQueueRequest:
    path_params: DeleteQueuePathParams = field()
    security: DeleteQueueSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteQueueResponse:
    content_type: str = field()
    status_code: int = field()
    

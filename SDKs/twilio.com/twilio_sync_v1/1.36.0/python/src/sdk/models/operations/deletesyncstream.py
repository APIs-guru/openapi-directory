from dataclasses import dataclass, field
from typing import Optional
DELETE_SYNC_STREAM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteSyncStreamPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncStreamSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncStreamRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSyncStreamPathParams = field(default=None)
    security: DeleteSyncStreamSecurity = field(default=None)
    

@dataclass
class DeleteSyncStreamResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

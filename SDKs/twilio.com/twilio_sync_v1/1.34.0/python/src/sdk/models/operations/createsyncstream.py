from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SYNC_STREAM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class CreateSyncStreamPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncStreamSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncStreamRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSyncStreamPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSyncStreamSecurity = field(default=None)
    

@dataclass
class CreateSyncStreamResponses:
    sync_v1_service_sync_stream: Optional[shared.SyncV1ServiceSyncStream] = field(default=None)
    

@dataclass
class CreateSyncStreamResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSyncStreamResponses]] = field(default=None)
    status_code: int = field(default=None)
    

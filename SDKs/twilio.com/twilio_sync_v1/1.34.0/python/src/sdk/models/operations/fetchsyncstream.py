from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SYNC_STREAM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class FetchSyncStreamPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncStreamSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncStreamRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSyncStreamPathParams = field(default=None)
    security: FetchSyncStreamSecurity = field(default=None)
    

@dataclass
class FetchSyncStreamResponses:
    sync_v1_service_sync_stream: Optional[shared.SyncV1ServiceSyncStream] = field(default=None)
    

@dataclass
class FetchSyncStreamResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchSyncStreamResponses]] = field(default=None)
    status_code: int = field(default=None)
    

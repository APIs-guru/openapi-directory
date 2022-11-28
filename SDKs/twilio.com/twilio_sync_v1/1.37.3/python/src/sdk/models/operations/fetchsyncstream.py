from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SYNC_STREAM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class FetchSyncStreamPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncStreamSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncStreamRequest:
    path_params: FetchSyncStreamPathParams = field()
    security: FetchSyncStreamSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSyncStreamResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_sync_stream: Optional[shared.SyncV1ServiceSyncStream] = field(default=None)
    

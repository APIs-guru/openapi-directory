from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_SYNC_STREAM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class CreateSyncStreamPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncStreamCreateSyncStreamRequest:
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateSyncStreamSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncStreamRequest:
    path_params: CreateSyncStreamPathParams = field()
    security: CreateSyncStreamSecurity = field()
    request: Optional[CreateSyncStreamCreateSyncStreamRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSyncStreamResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_sync_stream: Optional[shared.SyncV1ServiceSyncStream] = field(default=None)
    

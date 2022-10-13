from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SYNC_STREAM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class UpdateSyncStreamPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncStreamRequestBodyUpdateSyncStreamRequest:
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class UpdateSyncStreamSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncStreamRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSyncStreamPathParams = field(default=None)
    request: Optional[UpdateSyncStreamRequestBodyUpdateSyncStreamRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSyncStreamSecurity = field(default=None)
    

@dataclass
class UpdateSyncStreamResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    sync_v1_service_sync_stream: Optional[shared.SyncV1ServiceSyncStream] = field(default=None)
    

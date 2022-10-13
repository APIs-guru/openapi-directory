from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SYNC_MAP_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class FetchSyncMapPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncMapSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncMapRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSyncMapPathParams = field(default=None)
    security: FetchSyncMapSecurity = field(default=None)
    

@dataclass
class FetchSyncMapResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    sync_v1_service_sync_map: Optional[shared.SyncV1ServiceSyncMap] = field(default=None)
    

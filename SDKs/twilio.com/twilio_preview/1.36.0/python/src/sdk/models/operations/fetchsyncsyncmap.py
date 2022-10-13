from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SYNC_SYNC_MAP_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchSyncSyncMapPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncSyncMapSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncSyncMapRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSyncSyncMapPathParams = field(default=None)
    security: FetchSyncSyncMapSecurity = field(default=None)
    

@dataclass
class FetchSyncSyncMapResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_sync_service_sync_map: Optional[shared.PreviewSyncServiceSyncMap] = field(default=None)
    

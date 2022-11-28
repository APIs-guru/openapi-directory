from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SYNC_SYNC_MAP_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchSyncSyncMapPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncSyncMapSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncSyncMapRequest:
    path_params: FetchSyncSyncMapPathParams = field()
    security: FetchSyncSyncMapSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSyncSyncMapResponse:
    content_type: str = field()
    status_code: int = field()
    preview_sync_service_sync_map: Optional[shared.PreviewSyncServiceSyncMap] = field(default=None)
    

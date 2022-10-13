from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SYNC_MAP_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class CreateSyncMapPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncMapSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncMapRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSyncMapPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSyncMapSecurity = field(default=None)
    

@dataclass
class CreateSyncMapResponses:
    sync_v1_service_sync_map: Optional[shared.SyncV1ServiceSyncMap] = field(default=None)
    

@dataclass
class CreateSyncMapResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSyncMapResponses]] = field(default=None)
    status_code: int = field(default=None)
    

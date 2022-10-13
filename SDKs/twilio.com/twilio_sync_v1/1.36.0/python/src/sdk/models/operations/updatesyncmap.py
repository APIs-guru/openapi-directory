from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SYNC_MAP_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class UpdateSyncMapPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncMapRequestBodyUpdateSyncMapRequest:
    collection_ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CollectionTtl' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class UpdateSyncMapSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncMapRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSyncMapPathParams = field(default=None)
    request: Optional[UpdateSyncMapRequestBodyUpdateSyncMapRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSyncMapSecurity = field(default=None)
    

@dataclass
class UpdateSyncMapResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    sync_v1_service_sync_map: Optional[shared.SyncV1ServiceSyncMap] = field(default=None)
    

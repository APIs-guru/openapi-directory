from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_SYNC_MAP_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class CreateSyncMapPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncMapCreateSyncMapRequest:
    collection_ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CollectionTtl' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateSyncMapSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncMapRequest:
    path_params: CreateSyncMapPathParams = field()
    security: CreateSyncMapSecurity = field()
    request: Optional[CreateSyncMapCreateSyncMapRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSyncMapResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_sync_map: Optional[shared.SyncV1ServiceSyncMap] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SYNC_MAP_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class CreateSyncMapItemPathParams:
    map_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncMapItemRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSyncMapItemPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSyncMapItemSecurity = field(default=None)
    

@dataclass
class CreateSyncMapItemResponses:
    sync_v1_service_sync_map_sync_map_item: Optional[shared.SyncV1ServiceSyncMapSyncMapItem] = field(default=None)
    

@dataclass
class CreateSyncMapItemResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSyncMapItemResponses]] = field(default=None)
    status_code: int = field(default=None)
    

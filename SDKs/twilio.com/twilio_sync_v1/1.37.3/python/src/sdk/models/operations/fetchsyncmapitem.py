from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SYNC_MAP_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class FetchSyncMapItemPathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'Key', 'style': 'simple', 'explode': False }})
    map_sid: str = field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncMapItemRequest:
    path_params: FetchSyncMapItemPathParams = field()
    security: FetchSyncMapItemSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSyncMapItemResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_sync_map_sync_map_item: Optional[shared.SyncV1ServiceSyncMapSyncMapItem] = field(default=None)
    

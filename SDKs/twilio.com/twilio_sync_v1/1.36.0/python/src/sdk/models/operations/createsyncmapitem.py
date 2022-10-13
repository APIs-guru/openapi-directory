from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
CREATE_SYNC_MAP_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class CreateSyncMapItemPathParams:
    map_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncMapItemRequestBodyCreateSyncMapItemRequest:
    collection_ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CollectionTtl' }})
    data: Any = field(default=None, metadata={'form': { 'field_name': 'Data' }})
    item_ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'ItemTtl' }})
    key: str = field(default=None, metadata={'form': { 'field_name': 'Key' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class CreateSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncMapItemRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSyncMapItemPathParams = field(default=None)
    request: Optional[CreateSyncMapItemRequestBodyCreateSyncMapItemRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSyncMapItemSecurity = field(default=None)
    

@dataclass
class CreateSyncMapItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    sync_v1_service_sync_map_sync_map_item: Optional[shared.SyncV1ServiceSyncMapSyncMapItem] = field(default=None)
    

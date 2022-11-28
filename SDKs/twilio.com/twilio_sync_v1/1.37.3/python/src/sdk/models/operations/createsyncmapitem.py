from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


CREATE_SYNC_MAP_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class CreateSyncMapItemPathParams:
    map_sid: str = field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncMapItemCreateSyncMapItemRequest:
    data: Any = field(metadata={'form': { 'field_name': 'Data' }})
    key: str = field(metadata={'form': { 'field_name': 'Key' }})
    collection_ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CollectionTtl' }})
    item_ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'ItemTtl' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class CreateSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncMapItemRequest:
    path_params: CreateSyncMapItemPathParams = field()
    security: CreateSyncMapItemSecurity = field()
    request: Optional[CreateSyncMapItemCreateSyncMapItemRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSyncMapItemResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_sync_map_sync_map_item: Optional[shared.SyncV1ServiceSyncMapSyncMapItem] = field(default=None)
    

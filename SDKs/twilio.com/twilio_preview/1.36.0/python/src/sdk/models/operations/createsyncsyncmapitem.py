from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
CREATE_SYNC_SYNC_MAP_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateSyncSyncMapItemPathParams:
    map_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncSyncMapItemCreateSyncSyncMapItemRequest:
    data: Any = field(default=None, metadata={'form': { 'field_name': 'Data' }})
    key: str = field(default=None, metadata={'form': { 'field_name': 'Key' }})
    

@dataclass
class CreateSyncSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncSyncMapItemRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSyncSyncMapItemPathParams = field(default=None)
    request: Optional[CreateSyncSyncMapItemCreateSyncSyncMapItemRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSyncSyncMapItemSecurity = field(default=None)
    

@dataclass
class CreateSyncSyncMapItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_sync_service_sync_map_sync_map_item: Optional[shared.PreviewSyncServiceSyncMapSyncMapItem] = field(default=None)
    

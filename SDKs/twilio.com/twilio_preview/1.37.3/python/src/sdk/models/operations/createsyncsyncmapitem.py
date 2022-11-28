from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


CREATE_SYNC_SYNC_MAP_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateSyncSyncMapItemPathParams:
    map_sid: str = field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncSyncMapItemCreateSyncSyncMapItemRequest:
    data: Any = field(metadata={'form': { 'field_name': 'Data' }})
    key: str = field(metadata={'form': { 'field_name': 'Key' }})
    

@dataclass
class CreateSyncSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncSyncMapItemRequest:
    path_params: CreateSyncSyncMapItemPathParams = field()
    security: CreateSyncSyncMapItemSecurity = field()
    request: Optional[CreateSyncSyncMapItemCreateSyncSyncMapItemRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSyncSyncMapItemResponse:
    content_type: str = field()
    status_code: int = field()
    preview_sync_service_sync_map_sync_map_item: Optional[shared.PreviewSyncServiceSyncMapSyncMapItem] = field(default=None)
    

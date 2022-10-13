from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
UPDATE_SYNC_SYNC_MAP_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateSyncSyncMapItemPathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'Key', 'style': 'simple', 'explode': False }})
    map_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncSyncMapItemHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    

@dataclass
class UpdateSyncSyncMapItemRequestBodyUpdateSyncSyncMapItemRequest:
    data: Any = field(default=None, metadata={'form': { 'field_name': 'Data' }})
    

@dataclass
class UpdateSyncSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncSyncMapItemRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSyncSyncMapItemPathParams = field(default=None)
    headers: UpdateSyncSyncMapItemHeaders = field(default=None)
    request: Optional[UpdateSyncSyncMapItemRequestBodyUpdateSyncSyncMapItemRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSyncSyncMapItemSecurity = field(default=None)
    

@dataclass
class UpdateSyncSyncMapItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_sync_service_sync_map_sync_map_item: Optional[shared.PreviewSyncServiceSyncMapSyncMapItem] = field(default=None)
    

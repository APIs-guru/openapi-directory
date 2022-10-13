from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SYNC_MAP_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class UpdateSyncMapItemPathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'Key', 'style': 'simple', 'explode': False }})
    map_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncMapItemHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    

@dataclass
class UpdateSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncMapItemRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSyncMapItemPathParams = field(default=None)
    headers: UpdateSyncMapItemHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSyncMapItemSecurity = field(default=None)
    

@dataclass
class UpdateSyncMapItemResponses:
    sync_v1_service_sync_map_sync_map_item: Optional[shared.SyncV1ServiceSyncMapSyncMapItem] = field(default=None)
    

@dataclass
class UpdateSyncMapItemResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateSyncMapItemResponses]] = field(default=None)
    status_code: int = field(default=None)
    

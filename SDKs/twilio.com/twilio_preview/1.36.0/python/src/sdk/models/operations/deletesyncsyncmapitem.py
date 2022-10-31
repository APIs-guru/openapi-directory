from dataclasses import dataclass, field
from typing import Optional
DELETE_SYNC_SYNC_MAP_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteSyncSyncMapItemPathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'Key', 'style': 'simple', 'explode': False }})
    map_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncSyncMapItemHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncSyncMapItemRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSyncSyncMapItemPathParams = field(default=None)
    headers: DeleteSyncSyncMapItemHeaders = field(default=None)
    security: DeleteSyncSyncMapItemSecurity = field(default=None)
    

@dataclass
class DeleteSyncSyncMapItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

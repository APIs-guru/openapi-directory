from dataclasses import dataclass, field
from typing import Optional
DELETE_SYNC_MAP_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteSyncMapItemPathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'Key', 'style': 'simple', 'explode': False }})
    map_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncMapItemHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    

@dataclass
class DeleteSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncMapItemRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSyncMapItemPathParams = field(default=None)
    headers: DeleteSyncMapItemHeaders = field(default=None)
    security: DeleteSyncMapItemSecurity = field(default=None)
    

@dataclass
class DeleteSyncMapItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SYNC_SYNC_MAP_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteSyncSyncMapItemPathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'Key', 'style': 'simple', 'explode': False }})
    map_sid: str = field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncSyncMapItemHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncSyncMapItemRequest:
    headers: DeleteSyncSyncMapItemHeaders = field()
    path_params: DeleteSyncSyncMapItemPathParams = field()
    security: DeleteSyncSyncMapItemSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSyncSyncMapItemResponse:
    content_type: str = field()
    status_code: int = field()
    

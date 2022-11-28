from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SYNC_MAP_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteSyncMapItemPathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'Key', 'style': 'simple', 'explode': False }})
    map_sid: str = field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncMapItemHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncMapItemRequest:
    headers: DeleteSyncMapItemHeaders = field()
    path_params: DeleteSyncMapItemPathParams = field()
    security: DeleteSyncMapItemSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSyncMapItemResponse:
    content_type: str = field()
    status_code: int = field()
    

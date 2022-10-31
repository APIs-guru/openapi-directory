from dataclasses import dataclass, field
from typing import List,Optional
DELETE_SYNC_SYNC_LIST_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteSyncSyncListItemPathParams:
    index: int = field(default=None, metadata={'path_param': { 'field_name': 'Index', 'style': 'simple', 'explode': False }})
    list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncSyncListItemHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncSyncListItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncSyncListItemRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSyncSyncListItemPathParams = field(default=None)
    headers: DeleteSyncSyncListItemHeaders = field(default=None)
    security: DeleteSyncSyncListItemSecurity = field(default=None)
    

@dataclass
class DeleteSyncSyncListItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

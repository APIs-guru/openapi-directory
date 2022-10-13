from dataclasses import dataclass, field
from typing import List,Optional
DELETE_SYNC_LIST_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteSyncListItemPathParams:
    index: int = field(default=None, metadata={'path_param': { 'field_name': 'Index', 'style': 'simple', 'explode': False }})
    list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncListItemHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    

@dataclass
class DeleteSyncListItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncListItemRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSyncListItemPathParams = field(default=None)
    headers: DeleteSyncListItemHeaders = field(default=None)
    security: DeleteSyncListItemSecurity = field(default=None)
    

@dataclass
class DeleteSyncListItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

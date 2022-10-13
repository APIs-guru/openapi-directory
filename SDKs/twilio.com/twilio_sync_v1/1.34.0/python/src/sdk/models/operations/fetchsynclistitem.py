from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
FETCH_SYNC_LIST_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class FetchSyncListItemPathParams:
    index: int = field(default=None, metadata={'path_param': { 'field_name': 'Index', 'style': 'simple', 'explode': False }})
    list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncListItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncListItemRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSyncListItemPathParams = field(default=None)
    security: FetchSyncListItemSecurity = field(default=None)
    

@dataclass
class FetchSyncListItemResponses:
    sync_v1_service_sync_list_sync_list_item: Optional[shared.SyncV1ServiceSyncListSyncListItem] = field(default=None)
    

@dataclass
class FetchSyncListItemResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchSyncListItemResponses]] = field(default=None)
    status_code: int = field(default=None)
    

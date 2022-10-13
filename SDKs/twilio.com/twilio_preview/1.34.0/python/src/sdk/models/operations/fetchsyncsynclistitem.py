from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
FETCH_SYNC_SYNC_LIST_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchSyncSyncListItemPathParams:
    index: int = field(default=None, metadata={'path_param': { 'field_name': 'Index', 'style': 'simple', 'explode': False }})
    list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncSyncListItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncSyncListItemRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSyncSyncListItemPathParams = field(default=None)
    security: FetchSyncSyncListItemSecurity = field(default=None)
    

@dataclass
class FetchSyncSyncListItemResponses:
    preview_sync_service_sync_list_sync_list_item: Optional[shared.PreviewSyncServiceSyncListSyncListItem] = field(default=None)
    

@dataclass
class FetchSyncSyncListItemResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchSyncSyncListItemResponses]] = field(default=None)
    status_code: int = field(default=None)
    

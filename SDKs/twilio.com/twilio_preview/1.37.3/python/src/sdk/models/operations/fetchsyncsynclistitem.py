from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SYNC_SYNC_LIST_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchSyncSyncListItemPathParams:
    index: int = field(metadata={'path_param': { 'field_name': 'Index', 'style': 'simple', 'explode': False }})
    list_sid: str = field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncSyncListItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncSyncListItemRequest:
    path_params: FetchSyncSyncListItemPathParams = field()
    security: FetchSyncSyncListItemSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSyncSyncListItemResponse:
    content_type: str = field()
    status_code: int = field()
    preview_sync_service_sync_list_sync_list_item: Optional[shared.PreviewSyncServiceSyncListSyncListItem] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared
UPDATE_SYNC_SYNC_LIST_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateSyncSyncListItemPathParams:
    index: int = field(default=None, metadata={'path_param': { 'field_name': 'Index', 'style': 'simple', 'explode': False }})
    list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncSyncListItemHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncSyncListItemUpdateSyncSyncListItemRequest:
    data: Any = field(default=None, metadata={'form': { 'field_name': 'Data' }})
    

@dataclass
class UpdateSyncSyncListItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncSyncListItemRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSyncSyncListItemPathParams = field(default=None)
    headers: UpdateSyncSyncListItemHeaders = field(default=None)
    request: Optional[UpdateSyncSyncListItemUpdateSyncSyncListItemRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSyncSyncListItemSecurity = field(default=None)
    

@dataclass
class UpdateSyncSyncListItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_sync_service_sync_list_sync_list_item: Optional[shared.PreviewSyncServiceSyncListSyncListItem] = field(default=None)
    

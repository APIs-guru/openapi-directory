from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared
CREATE_SYNC_SYNC_LIST_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateSyncSyncListItemPathParams:
    list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncSyncListItemCreateSyncSyncListItemRequest:
    data: Any = field(default=None, metadata={'form': { 'field_name': 'Data' }})
    

@dataclass
class CreateSyncSyncListItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncSyncListItemRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSyncSyncListItemPathParams = field(default=None)
    request: Optional[CreateSyncSyncListItemCreateSyncSyncListItemRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSyncSyncListItemSecurity = field(default=None)
    

@dataclass
class CreateSyncSyncListItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_sync_service_sync_list_sync_list_item: Optional[shared.PreviewSyncServiceSyncListSyncListItem] = field(default=None)
    

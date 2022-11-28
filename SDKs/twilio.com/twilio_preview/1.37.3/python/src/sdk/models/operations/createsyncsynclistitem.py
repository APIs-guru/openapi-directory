from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


CREATE_SYNC_SYNC_LIST_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateSyncSyncListItemPathParams:
    list_sid: str = field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncSyncListItemCreateSyncSyncListItemRequest:
    data: Any = field(metadata={'form': { 'field_name': 'Data' }})
    

@dataclass
class CreateSyncSyncListItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncSyncListItemRequest:
    path_params: CreateSyncSyncListItemPathParams = field()
    security: CreateSyncSyncListItemSecurity = field()
    request: Optional[CreateSyncSyncListItemCreateSyncSyncListItemRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSyncSyncListItemResponse:
    content_type: str = field()
    status_code: int = field()
    preview_sync_service_sync_list_sync_list_item: Optional[shared.PreviewSyncServiceSyncListSyncListItem] = field(default=None)
    

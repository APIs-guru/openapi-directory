from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
UPDATE_SYNC_LIST_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class UpdateSyncListItemPathParams:
    index: int = field(default=None, metadata={'path_param': { 'field_name': 'Index', 'style': 'simple', 'explode': False }})
    list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncListItemHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    

@dataclass
class UpdateSyncListItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncListItemRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSyncListItemPathParams = field(default=None)
    headers: UpdateSyncListItemHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSyncListItemSecurity = field(default=None)
    

@dataclass
class UpdateSyncListItemResponses:
    sync_v1_service_sync_list_sync_list_item: Optional[shared.SyncV1ServiceSyncListSyncListItem] = field(default=None)
    

@dataclass
class UpdateSyncListItemResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateSyncListItemResponses]] = field(default=None)
    status_code: int = field(default=None)
    

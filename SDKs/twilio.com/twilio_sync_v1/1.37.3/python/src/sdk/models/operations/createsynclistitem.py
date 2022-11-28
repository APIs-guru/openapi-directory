from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


CREATE_SYNC_LIST_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class CreateSyncListItemPathParams:
    list_sid: str = field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncListItemCreateSyncListItemRequest:
    data: Any = field(metadata={'form': { 'field_name': 'Data' }})
    collection_ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CollectionTtl' }})
    item_ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'ItemTtl' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class CreateSyncListItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncListItemRequest:
    path_params: CreateSyncListItemPathParams = field()
    security: CreateSyncListItemSecurity = field()
    request: Optional[CreateSyncListItemCreateSyncListItemRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSyncListItemResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_sync_list_sync_list_item: Optional[shared.SyncV1ServiceSyncListSyncListItem] = field(default=None)
    

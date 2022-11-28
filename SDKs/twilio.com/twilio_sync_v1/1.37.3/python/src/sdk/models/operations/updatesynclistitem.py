from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_SYNC_LIST_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class UpdateSyncListItemPathParams:
    index: int = field(metadata={'path_param': { 'field_name': 'Index', 'style': 'simple', 'explode': False }})
    list_sid: str = field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncListItemHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncListItemUpdateSyncListItemRequest:
    collection_ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CollectionTtl' }})
    data: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Data' }})
    item_ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'ItemTtl' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class UpdateSyncListItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncListItemRequest:
    headers: UpdateSyncListItemHeaders = field()
    path_params: UpdateSyncListItemPathParams = field()
    security: UpdateSyncListItemSecurity = field()
    request: Optional[UpdateSyncListItemUpdateSyncListItemRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSyncListItemResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_sync_list_sync_list_item: Optional[shared.SyncV1ServiceSyncListSyncListItem] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SYNC_SYNC_LIST_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteSyncSyncListItemPathParams:
    index: int = field(metadata={'path_param': { 'field_name': 'Index', 'style': 'simple', 'explode': False }})
    list_sid: str = field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncSyncListItemHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncSyncListItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncSyncListItemRequest:
    headers: DeleteSyncSyncListItemHeaders = field()
    path_params: DeleteSyncSyncListItemPathParams = field()
    security: DeleteSyncSyncListItemSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSyncSyncListItemResponse:
    content_type: str = field()
    status_code: int = field()
    

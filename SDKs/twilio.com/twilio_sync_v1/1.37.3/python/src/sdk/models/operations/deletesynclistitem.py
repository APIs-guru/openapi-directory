from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SYNC_LIST_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteSyncListItemPathParams:
    index: int = field(metadata={'path_param': { 'field_name': 'Index', 'style': 'simple', 'explode': False }})
    list_sid: str = field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncListItemHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncListItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncListItemRequest:
    headers: DeleteSyncListItemHeaders = field()
    path_params: DeleteSyncListItemPathParams = field()
    security: DeleteSyncListItemSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSyncListItemResponse:
    content_type: str = field()
    status_code: int = field()
    

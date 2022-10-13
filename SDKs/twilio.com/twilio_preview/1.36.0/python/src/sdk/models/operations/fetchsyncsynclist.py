from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
FETCH_SYNC_SYNC_LIST_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchSyncSyncListPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncSyncListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncSyncListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSyncSyncListPathParams = field(default=None)
    security: FetchSyncSyncListSecurity = field(default=None)
    

@dataclass
class FetchSyncSyncListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_sync_service_sync_list: Optional[shared.PreviewSyncServiceSyncList] = field(default=None)
    

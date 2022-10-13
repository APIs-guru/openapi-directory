from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
FETCH_SYNC_LIST_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class FetchSyncListPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSyncListPathParams = field(default=None)
    security: FetchSyncListSecurity = field(default=None)
    

@dataclass
class FetchSyncListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    sync_v1_service_sync_list: Optional[shared.SyncV1ServiceSyncList] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SYNC_LIST_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class FetchSyncListPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncListRequest:
    path_params: FetchSyncListPathParams = field()
    security: FetchSyncListSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSyncListResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_sync_list: Optional[shared.SyncV1ServiceSyncList] = field(default=None)
    

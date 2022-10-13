from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
UPDATE_SYNC_LIST_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class UpdateSyncListPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSyncListPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSyncListSecurity = field(default=None)
    

@dataclass
class UpdateSyncListResponses:
    sync_v1_service_sync_list: Optional[shared.SyncV1ServiceSyncList] = field(default=None)
    

@dataclass
class UpdateSyncListResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateSyncListResponses]] = field(default=None)
    status_code: int = field(default=None)
    

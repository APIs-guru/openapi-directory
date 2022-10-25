from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
CREATE_SYNC_SYNC_LIST_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateSyncSyncListPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncSyncListCreateSyncSyncListRequest:
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateSyncSyncListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncSyncListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSyncSyncListPathParams = field(default=None)
    request: Optional[CreateSyncSyncListCreateSyncSyncListRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSyncSyncListSecurity = field(default=None)
    

@dataclass
class CreateSyncSyncListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_sync_service_sync_list: Optional[shared.PreviewSyncServiceSyncList] = field(default=None)
    

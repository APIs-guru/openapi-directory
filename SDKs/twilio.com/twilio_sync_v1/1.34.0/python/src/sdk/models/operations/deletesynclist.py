from dataclasses import dataclass, field
from typing import List,Optional
DELETE_SYNC_LIST_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteSyncListPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSyncListPathParams = field(default=None)
    security: DeleteSyncListSecurity = field(default=None)
    

@dataclass
class DeleteSyncListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

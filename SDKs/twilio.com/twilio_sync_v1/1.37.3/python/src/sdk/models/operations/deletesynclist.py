from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SYNC_LIST_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class DeleteSyncListPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncListRequest:
    path_params: DeleteSyncListPathParams = field()
    security: DeleteSyncListSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSyncListResponse:
    content_type: str = field()
    status_code: int = field()
    

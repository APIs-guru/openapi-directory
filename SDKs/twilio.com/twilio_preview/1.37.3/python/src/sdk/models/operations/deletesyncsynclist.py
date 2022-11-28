from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SYNC_SYNC_LIST_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class DeleteSyncSyncListPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSyncSyncListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSyncSyncListRequest:
    path_params: DeleteSyncSyncListPathParams = field()
    security: DeleteSyncSyncListSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSyncSyncListResponse:
    content_type: str = field()
    status_code: int = field()
    

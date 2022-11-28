from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SYNC_SERVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchSyncServicePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncServiceRequest:
    path_params: FetchSyncServicePathParams = field()
    security: FetchSyncServiceSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSyncServiceResponse:
    content_type: str = field()
    status_code: int = field()
    preview_sync_service: Optional[shared.PreviewSyncService] = field(default=None)
    

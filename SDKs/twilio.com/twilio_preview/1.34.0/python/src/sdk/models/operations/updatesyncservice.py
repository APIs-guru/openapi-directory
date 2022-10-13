from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SYNC_SERVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateSyncServicePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncServiceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSyncServicePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSyncServiceSecurity = field(default=None)
    

@dataclass
class UpdateSyncServiceResponses:
    preview_sync_service: Optional[shared.PreviewSyncService] = field(default=None)
    

@dataclass
class UpdateSyncServiceResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateSyncServiceResponses]] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SYNC_SERVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateSyncServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncServiceRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSyncServiceSecurity = field(default=None)
    

@dataclass
class CreateSyncServiceResponses:
    preview_sync_service: Optional[shared.PreviewSyncService] = field(default=None)
    

@dataclass
class CreateSyncServiceResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSyncServiceResponses]] = field(default=None)
    status_code: int = field(default=None)
    

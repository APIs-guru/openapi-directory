from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SYNC_SYNC_MAP_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateSyncSyncMapPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncSyncMapRequestBodyCreateSyncSyncMapRequest:
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateSyncSyncMapSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncSyncMapRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSyncSyncMapPathParams = field(default=None)
    request: Optional[CreateSyncSyncMapRequestBodyCreateSyncSyncMapRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSyncSyncMapSecurity = field(default=None)
    

@dataclass
class CreateSyncSyncMapResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_sync_service_sync_map: Optional[shared.PreviewSyncServiceSyncMap] = field(default=None)
    

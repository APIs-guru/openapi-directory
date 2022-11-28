from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_SYNC_SYNC_MAP_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateSyncSyncMapPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncSyncMapCreateSyncSyncMapRequest:
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateSyncSyncMapSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncSyncMapRequest:
    path_params: CreateSyncSyncMapPathParams = field()
    security: CreateSyncSyncMapSecurity = field()
    request: Optional[CreateSyncSyncMapCreateSyncSyncMapRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSyncSyncMapResponse:
    content_type: str = field()
    status_code: int = field()
    preview_sync_service_sync_map: Optional[shared.PreviewSyncServiceSyncMap] = field(default=None)
    

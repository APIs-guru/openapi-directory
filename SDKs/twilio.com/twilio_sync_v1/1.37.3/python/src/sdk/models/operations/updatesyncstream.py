from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_SYNC_STREAM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class UpdateSyncStreamPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncStreamUpdateSyncStreamRequest:
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class UpdateSyncStreamSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncStreamRequest:
    path_params: UpdateSyncStreamPathParams = field()
    security: UpdateSyncStreamSecurity = field()
    request: Optional[UpdateSyncStreamUpdateSyncStreamRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSyncStreamResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_sync_stream: Optional[shared.SyncV1ServiceSyncStream] = field(default=None)
    

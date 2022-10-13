from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_STREAM_MESSAGE_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class CreateStreamMessagePathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    stream_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'StreamSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateStreamMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateStreamMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateStreamMessagePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateStreamMessageSecurity = field(default=None)
    

@dataclass
class CreateStreamMessageResponses:
    sync_v1_service_sync_stream_stream_message: Optional[shared.SyncV1ServiceSyncStreamStreamMessage] = field(default=None)
    

@dataclass
class CreateStreamMessageResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateStreamMessageResponses]] = field(default=None)
    status_code: int = field(default=None)
    

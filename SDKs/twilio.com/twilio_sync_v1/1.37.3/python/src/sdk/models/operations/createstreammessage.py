from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


CREATE_STREAM_MESSAGE_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class CreateStreamMessagePathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    stream_sid: str = field(metadata={'path_param': { 'field_name': 'StreamSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateStreamMessageCreateStreamMessageRequest:
    data: Any = field(metadata={'form': { 'field_name': 'Data' }})
    

@dataclass
class CreateStreamMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateStreamMessageRequest:
    path_params: CreateStreamMessagePathParams = field()
    security: CreateStreamMessageSecurity = field()
    request: Optional[CreateStreamMessageCreateStreamMessageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateStreamMessageResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_sync_stream_stream_message: Optional[shared.SyncV1ServiceSyncStreamStreamMessage] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


CREATE_SINK_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class CreateSinkCreateSinkRequest:
    description: str = field(metadata={'form': { 'field_name': 'Description' }})
    sink_configuration: Any = field(metadata={'form': { 'field_name': 'SinkConfiguration' }})
    sink_type: shared.SinkEnumSinkTypeEnum = field(metadata={'form': { 'field_name': 'SinkType' }})
    

@dataclass
class CreateSinkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSinkRequest:
    security: CreateSinkSecurity = field()
    request: Optional[CreateSinkCreateSinkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSinkResponse:
    content_type: str = field()
    status_code: int = field()
    events_v1_sink: Optional[shared.EventsV1Sink] = field(default=None)
    

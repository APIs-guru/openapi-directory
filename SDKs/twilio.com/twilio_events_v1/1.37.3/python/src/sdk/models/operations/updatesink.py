from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_SINK_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class UpdateSinkPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSinkUpdateSinkRequest:
    description: str = field(metadata={'form': { 'field_name': 'Description' }})
    

@dataclass
class UpdateSinkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSinkRequest:
    path_params: UpdateSinkPathParams = field()
    security: UpdateSinkSecurity = field()
    request: Optional[UpdateSinkUpdateSinkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSinkResponse:
    content_type: str = field()
    status_code: int = field()
    events_v1_sink: Optional[shared.EventsV1Sink] = field(default=None)
    

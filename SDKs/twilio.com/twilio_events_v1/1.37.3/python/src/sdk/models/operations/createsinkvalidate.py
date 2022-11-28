from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


CREATE_SINK_VALIDATE_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class CreateSinkValidatePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSinkValidateCreateSinkValidateRequest:
    test_id: str = field(metadata={'form': { 'field_name': 'TestId' }})
    

@dataclass
class CreateSinkValidateSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSinkValidateRequest:
    path_params: CreateSinkValidatePathParams = field()
    security: CreateSinkValidateSecurity = field()
    request: Optional[CreateSinkValidateCreateSinkValidateRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSinkValidateResponse:
    content_type: str = field()
    status_code: int = field()
    events_v1_sink_sink_validate: Optional[shared.EventsV1SinkSinkValidate] = field(default=None)
    

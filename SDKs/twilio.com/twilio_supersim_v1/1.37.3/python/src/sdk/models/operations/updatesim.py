from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_SIM_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class UpdateSimPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateSimUpdateSimRequestCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateSimUpdateSimRequest:
    account_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AccountSid' }})
    callback_method: Optional[UpdateSimUpdateSimRequestCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    fleet: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Fleet' }})
    status: Optional[shared.SimEnumStatusUpdateEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSimRequest:
    path_params: UpdateSimPathParams = field()
    security: UpdateSimSecurity = field()
    request: Optional[UpdateSimUpdateSimRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSimResponse:
    content_type: str = field()
    status_code: int = field()
    supersim_v1_sim: Optional[shared.SupersimV1Sim] = field(default=None)
    

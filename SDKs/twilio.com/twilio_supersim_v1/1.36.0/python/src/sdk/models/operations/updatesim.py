from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_SIM_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class UpdateSimPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSimRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSimPathParams = field(default=None)
    request: Optional[UpdateSimUpdateSimRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSimSecurity = field(default=None)
    

@dataclass
class UpdateSimResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    supersim_v1_sim: Optional[shared.SupersimV1Sim] = field(default=None)
    

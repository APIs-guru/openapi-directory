from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SIM_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class CreateSimRequestBodyCreateSimRequest:
    iccid: str = field(default=None, metadata={'form': { 'field_name': 'Iccid' }})
    registration_code: str = field(default=None, metadata={'form': { 'field_name': 'RegistrationCode' }})
    

@dataclass
class CreateSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSimRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateSimRequestBodyCreateSimRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSimSecurity = field(default=None)
    

@dataclass
class CreateSimResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    supersim_v1_sim: Optional[shared.SupersimV1Sim] = field(default=None)
    

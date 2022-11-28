from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_SIM_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class CreateSimCreateSimRequest:
    iccid: str = field(metadata={'form': { 'field_name': 'Iccid' }})
    registration_code: str = field(metadata={'form': { 'field_name': 'RegistrationCode' }})
    

@dataclass
class CreateSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSimRequest:
    security: CreateSimSecurity = field()
    request: Optional[CreateSimCreateSimRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSimResponse:
    content_type: str = field()
    status_code: int = field()
    supersim_v1_sim: Optional[shared.SupersimV1Sim] = field(default=None)
    

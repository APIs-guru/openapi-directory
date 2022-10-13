from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_FLEET_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class CreateFleetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateFleetRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateFleetSecurity = field(default=None)
    

@dataclass
class CreateFleetResponses:
    supersim_v1_fleet: Optional[shared.SupersimV1Fleet] = field(default=None)
    

@dataclass
class CreateFleetResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateFleetResponses]] = field(default=None)
    status_code: int = field(default=None)
    

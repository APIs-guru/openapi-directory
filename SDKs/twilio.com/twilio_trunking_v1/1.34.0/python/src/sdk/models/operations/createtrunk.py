from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_TRUNK_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class CreateTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTrunkRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTrunkSecurity = field(default=None)
    

@dataclass
class CreateTrunkResponses:
    trunking_v1_trunk: Optional[shared.TrunkingV1Trunk] = field(default=None)
    

@dataclass
class CreateTrunkResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateTrunkResponses]] = field(default=None)
    status_code: int = field(default=None)
    

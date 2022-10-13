from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SIM_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class UpdateSimPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSimRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSimPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSimSecurity = field(default=None)
    

@dataclass
class UpdateSimResponses:
    wireless_v1_sim: Optional[shared.WirelessV1Sim] = field(default=None)
    

@dataclass
class UpdateSimResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateSimResponses]] = field(default=None)
    status_code: int = field(default=None)
    

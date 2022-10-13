from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_TRUNK_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class UpdateTrunkPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTrunkRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateTrunkPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateTrunkSecurity = field(default=None)
    

@dataclass
class UpdateTrunkResponses:
    trunking_v1_trunk: Optional[shared.TrunkingV1Trunk] = field(default=None)
    

@dataclass
class UpdateTrunkResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateTrunkResponses]] = field(default=None)
    status_code: int = field(default=None)
    

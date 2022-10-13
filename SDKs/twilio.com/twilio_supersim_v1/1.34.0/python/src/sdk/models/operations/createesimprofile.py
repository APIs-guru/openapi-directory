from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_ESIM_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class CreateEsimProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateEsimProfileRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateEsimProfileSecurity = field(default=None)
    

@dataclass
class CreateEsimProfileResponses:
    supersim_v1_esim_profile: Optional[shared.SupersimV1EsimProfile] = field(default=None)
    

@dataclass
class CreateEsimProfileResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateEsimProfileResponses]] = field(default=None)
    status_code: int = field(default=None)
    

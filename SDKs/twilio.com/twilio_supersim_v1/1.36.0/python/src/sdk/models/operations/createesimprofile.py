from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_ESIM_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]

class CreateEsimProfileRequestBodyCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateEsimProfileRequestBodyCreateEsimProfileRequest:
    callback_method: Optional[CreateEsimProfileRequestBodyCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    eid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Eid' }})
    

@dataclass
class CreateEsimProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateEsimProfileRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateEsimProfileRequestBodyCreateEsimProfileRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateEsimProfileSecurity = field(default=None)
    

@dataclass
class CreateEsimProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    supersim_v1_esim_profile: Optional[shared.SupersimV1EsimProfile] = field(default=None)
    

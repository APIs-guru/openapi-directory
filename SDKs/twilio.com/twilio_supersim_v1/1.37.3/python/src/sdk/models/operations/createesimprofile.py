from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_ESIM_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]

class CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateEsimProfileCreateEsimProfileRequest:
    callback_method: Optional[CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    eid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Eid' }})
    

@dataclass
class CreateEsimProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateEsimProfileRequest:
    security: CreateEsimProfileSecurity = field()
    request: Optional[CreateEsimProfileCreateEsimProfileRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateEsimProfileResponse:
    content_type: str = field()
    status_code: int = field()
    supersim_v1_esim_profile: Optional[shared.SupersimV1EsimProfile] = field(default=None)
    

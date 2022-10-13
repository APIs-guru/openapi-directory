from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ConvertAccessTokenRequestBodyGrantTypeEnum(str, Enum):
    VIMEO_OAUTH1 = "vimeo_oauth1"


@dataclass_json
@dataclass
class ConvertAccessTokenRequestBody:
    grant_type: ConvertAccessTokenRequestBodyGrantTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grant_type' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    token_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_secret' }})
    

@dataclass
class ConvertAccessTokenRequest:
    request: ConvertAccessTokenRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.auth+json' }})
    

@dataclass
class ConvertAccessTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    auth: Optional[shared.Auth] = field(default=None)
    auth_error: Optional[shared.AuthError] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ExchangeAuthCodeRequestBodyGrantTypeEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"


@dataclass_json
@dataclass
class ExchangeAuthCodeRequestBody:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    grant_type: ExchangeAuthCodeRequestBodyGrantTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grant_type' }})
    redirect_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_uri' }})
    

@dataclass
class ExchangeAuthCodeRequest:
    request: ExchangeAuthCodeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.auth+json' }})
    

@dataclass
class ExchangeAuthCodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    auth: Optional[shared.Auth] = field(default=None)
    auth_error: Optional[shared.AuthError] = field(default=None)
    

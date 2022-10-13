from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ClientAuthRequestBodyGrantTypeEnum(str, Enum):
    CLIENT_CREDENTIALS = "client_credentials"


@dataclass_json
@dataclass
class ClientAuthRequestBody:
    grant_type: ClientAuthRequestBodyGrantTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grant_type' }})
    scope: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    

@dataclass
class ClientAuthRequest:
    request: ClientAuthRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.auth+json' }})
    

@dataclass
class ClientAuthResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    auth: Optional[shared.Auth] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    

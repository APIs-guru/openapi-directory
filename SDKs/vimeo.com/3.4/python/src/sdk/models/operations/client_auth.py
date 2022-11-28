from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class ClientAuthRequestBodyGrantTypeEnum(str, Enum):
    CLIENT_CREDENTIALS = "client_credentials"


@dataclass_json
@dataclass
class ClientAuthRequestBody:
    grant_type: ClientAuthRequestBodyGrantTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_type') }})
    scope: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    

@dataclass
class ClientAuthRequest:
    request: ClientAuthRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.auth+json' }})
    

@dataclass
class ClientAuthResponse:
    content_type: str = field()
    status_code: int = field()
    auth: Optional[shared.Auth] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    

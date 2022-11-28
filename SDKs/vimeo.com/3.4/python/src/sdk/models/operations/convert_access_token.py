from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class ConvertAccessTokenRequestBodyGrantTypeEnum(str, Enum):
    VIMEO_OAUTH1 = "vimeo_oauth1"


@dataclass_json
@dataclass
class ConvertAccessTokenRequestBody:
    grant_type: ConvertAccessTokenRequestBodyGrantTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_type') }})
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    token_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_secret') }})
    

@dataclass
class ConvertAccessTokenRequest:
    request: ConvertAccessTokenRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.auth+json' }})
    

@dataclass
class ConvertAccessTokenResponse:
    content_type: str = field()
    status_code: int = field()
    auth: Optional[shared.Auth] = field(default=None)
    auth_error: Optional[shared.AuthError] = field(default=None)
    

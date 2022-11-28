from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class ExchangeAuthCodeRequestBodyGrantTypeEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"


@dataclass_json
@dataclass
class ExchangeAuthCodeRequestBody:
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    grant_type: ExchangeAuthCodeRequestBodyGrantTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_type') }})
    redirect_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_uri') }})
    

@dataclass
class ExchangeAuthCodeRequest:
    request: ExchangeAuthCodeRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.auth+json' }})
    

@dataclass
class ExchangeAuthCodeResponse:
    content_type: str = field()
    status_code: int = field()
    auth: Optional[shared.Auth] = field(default=None)
    auth_error: Optional[shared.AuthError] = field(default=None)
    

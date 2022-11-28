from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CreateChannelRequestBodyPrivacyEnum(str, Enum):
    ANYBODY = "anybody"
    MODERATORS = "moderators"
    USER = "user"


@dataclass_json
@dataclass
class CreateChannelRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    privacy: CreateChannelRequestBodyPrivacyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    

@dataclass
class CreateChannelSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateChannelRequest:
    request: CreateChannelRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.channel+json' }})
    security: CreateChannelSecurity = field()
    

@dataclass
class CreateChannelResponse:
    content_type: str = field()
    status_code: int = field()
    channel: Optional[shared.Channel] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

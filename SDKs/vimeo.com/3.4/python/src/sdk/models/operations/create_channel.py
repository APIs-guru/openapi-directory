from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class CreateChannelRequestBodyPrivacyEnum(str, Enum):
    ANYBODY = "anybody"
    MODERATORS = "moderators"
    USER = "user"


@dataclass_json
@dataclass
class CreateChannelRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    privacy: CreateChannelRequestBodyPrivacyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    

@dataclass
class CreateChannelSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateChannelRequest:
    request: CreateChannelRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.channel+json' }})
    security: CreateChannelSecurity = field(default=None)
    

@dataclass
class CreateChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    channel: Optional[shared.Channel] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

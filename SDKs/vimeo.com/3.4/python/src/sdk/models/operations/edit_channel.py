from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EditChannelPathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    
class EditChannelRequestBodyPrivacyEnum(str, Enum):
    ANYBODY = "anybody"
    MODERATORS = "moderators"
    USERS = "users"


@dataclass_json
@dataclass
class EditChannelRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    privacy: Optional[EditChannelRequestBodyPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    

@dataclass
class EditChannelSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EditChannelRequest:
    path_params: EditChannelPathParams = field(default=None)
    request: Optional[EditChannelRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.channel+json' }})
    security: EditChannelSecurity = field(default=None)
    

@dataclass
class EditChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    channel: Optional[shared.Channel] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

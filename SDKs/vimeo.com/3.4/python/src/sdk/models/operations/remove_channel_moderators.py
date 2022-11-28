from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RemoveChannelModeratorsPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RemoveChannelModeratorsRequestBody:
    user_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_uri') }})
    

@dataclass
class RemoveChannelModeratorsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveChannelModeratorsRequest:
    path_params: RemoveChannelModeratorsPathParams = field()
    request: RemoveChannelModeratorsRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.user+json' }})
    security: RemoveChannelModeratorsSecurity = field()
    

@dataclass
class RemoveChannelModeratorsResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    user: Optional[shared.User] = field(default=None)
    

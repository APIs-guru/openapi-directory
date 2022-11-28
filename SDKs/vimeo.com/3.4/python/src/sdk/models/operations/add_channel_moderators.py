from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddChannelModeratorsPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddChannelModeratorsRequestBody:
    user_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_uri') }})
    

@dataclass
class AddChannelModeratorsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddChannelModeratorsRequest:
    path_params: AddChannelModeratorsPathParams = field()
    request: AddChannelModeratorsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddChannelModeratorsSecurity = field()
    

@dataclass
class AddChannelModeratorsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

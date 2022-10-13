from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddChannelModeratorsPathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddChannelModeratorsRequestBody:
    user_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_uri' }})
    

@dataclass
class AddChannelModeratorsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddChannelModeratorsRequest:
    path_params: AddChannelModeratorsPathParams = field(default=None)
    request: AddChannelModeratorsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddChannelModeratorsSecurity = field(default=None)
    

@dataclass
class AddChannelModeratorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

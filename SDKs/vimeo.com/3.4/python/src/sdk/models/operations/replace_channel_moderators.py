from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReplaceChannelModeratorsPathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReplaceChannelModeratorsRequestBody:
    user_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_uri' }})
    

@dataclass
class ReplaceChannelModeratorsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplaceChannelModeratorsRequest:
    path_params: ReplaceChannelModeratorsPathParams = field(default=None)
    request: ReplaceChannelModeratorsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ReplaceChannelModeratorsSecurity = field(default=None)
    

@dataclass
class ReplaceChannelModeratorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    users: Optional[List[shared.User]] = field(default=None)
    

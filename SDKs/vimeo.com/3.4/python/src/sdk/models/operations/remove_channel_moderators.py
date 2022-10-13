from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RemoveChannelModeratorsPathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RemoveChannelModeratorsRequestBody:
    user_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_uri' }})
    

@dataclass
class RemoveChannelModeratorsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveChannelModeratorsRequest:
    path_params: RemoveChannelModeratorsPathParams = field(default=None)
    request: RemoveChannelModeratorsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.user+json' }})
    security: RemoveChannelModeratorsSecurity = field(default=None)
    

@dataclass
class RemoveChannelModeratorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    user: Optional[shared.User] = field(default=None)
    

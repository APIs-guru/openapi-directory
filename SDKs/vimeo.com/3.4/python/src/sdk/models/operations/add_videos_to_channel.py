from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddVideosToChannelPathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddVideosToChannelRequestBody:
    video_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'video_uri' }})
    

@dataclass
class AddVideosToChannelSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideosToChannelRequest:
    path_params: AddVideosToChannelPathParams = field(default=None)
    request: AddVideosToChannelRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddVideosToChannelSecurity = field(default=None)
    

@dataclass
class AddVideosToChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

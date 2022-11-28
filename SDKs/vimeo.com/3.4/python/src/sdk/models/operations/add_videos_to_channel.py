from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddVideosToChannelPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddVideosToChannelRequestBody:
    video_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('video_uri') }})
    

@dataclass
class AddVideosToChannelSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideosToChannelRequest:
    path_params: AddVideosToChannelPathParams = field()
    request: AddVideosToChannelRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddVideosToChannelSecurity = field()
    

@dataclass
class AddVideosToChannelResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

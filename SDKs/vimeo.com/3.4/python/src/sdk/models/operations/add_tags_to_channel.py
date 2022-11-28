from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddTagsToChannelPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddTagsToChannelRequestBody:
    tag: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass
class AddTagsToChannelSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddTagsToChannelRequest:
    path_params: AddTagsToChannelPathParams = field()
    request: AddTagsToChannelRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.tag+json' }})
    security: AddTagsToChannelSecurity = field()
    

@dataclass
class AddTagsToChannelResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    tags: Optional[List[shared.Tag]] = field(default=None)
    

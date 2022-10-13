from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddTagsToChannelPathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddTagsToChannelRequestBody:
    tag: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    

@dataclass
class AddTagsToChannelSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddTagsToChannelRequest:
    path_params: AddTagsToChannelPathParams = field(default=None)
    request: AddTagsToChannelRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.tag+json' }})
    security: AddTagsToChannelSecurity = field(default=None)
    

@dataclass
class AddTagsToChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    tags: Optional[List[shared.Tag]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateCommentAlt1PathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateCommentAlt1RequestBody:
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

@dataclass
class CreateCommentAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCommentAlt1Request:
    path_params: CreateCommentAlt1PathParams = field(default=None)
    request: CreateCommentAlt1RequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.comment+json' }})
    security: CreateCommentAlt1Security = field(default=None)
    

@dataclass
class CreateCommentAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    comment: Optional[shared.Comment] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    

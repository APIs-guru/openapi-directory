from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateCommentPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateCommentRequestBody:
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass
class CreateCommentSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCommentRequest:
    path_params: CreateCommentPathParams = field()
    request: CreateCommentRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.comment+json' }})
    security: CreateCommentSecurity = field()
    

@dataclass
class CreateCommentResponse:
    content_type: str = field()
    status_code: int = field()
    comment: Optional[shared.Comment] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    

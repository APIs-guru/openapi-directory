from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EditCommentPathParams:
    comment_id: float = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EditCommentRequestBody:
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass
class EditCommentSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EditCommentRequest:
    path_params: EditCommentPathParams = field()
    request: EditCommentRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.comment+json' }})
    security: EditCommentSecurity = field()
    

@dataclass
class EditCommentResponse:
    content_type: str = field()
    status_code: int = field()
    comment: Optional[shared.Comment] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    

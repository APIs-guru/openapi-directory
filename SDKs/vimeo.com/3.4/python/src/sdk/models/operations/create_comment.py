from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateCommentPathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateCommentRequestBody:
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

@dataclass
class CreateCommentSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCommentRequest:
    path_params: CreateCommentPathParams = field(default=None)
    request: CreateCommentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.comment+json' }})
    security: CreateCommentSecurity = field(default=None)
    

@dataclass
class CreateCommentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    comment: Optional[shared.Comment] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    

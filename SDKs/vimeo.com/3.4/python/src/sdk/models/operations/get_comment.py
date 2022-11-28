from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCommentPathParams:
    comment_id: float = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCommentRequest:
    path_params: GetCommentPathParams = field()
    

@dataclass
class GetCommentResponse:
    content_type: str = field()
    status_code: int = field()
    comment: Optional[shared.Comment] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

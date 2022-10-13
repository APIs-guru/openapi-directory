from dataclasses import dataclass, field
from typing import List


@dataclass
class SongListAPIDeleteCommentPathParams:
    comment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SongListAPIDeleteCommentRequest:
    path_params: SongListAPIDeleteCommentPathParams = field(default=None)
    

@dataclass
class SongListAPIDeleteCommentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

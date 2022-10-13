from dataclasses import dataclass, field



@dataclass
class SongAPIDeleteCommentPathParams:
    comment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SongAPIDeleteCommentRequest:
    path_params: SongAPIDeleteCommentPathParams = field(default=None)
    

@dataclass
class SongAPIDeleteCommentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field



@dataclass
class SongAPIDeleteCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SongAPIDeleteCommentRequest:
    path_params: SongAPIDeleteCommentPathParams = field()
    

@dataclass
class SongAPIDeleteCommentResponse:
    content_type: str = field()
    status_code: int = field()
    

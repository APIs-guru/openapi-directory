from dataclasses import dataclass, field



@dataclass
class SongListAPIDeleteCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SongListAPIDeleteCommentRequest:
    path_params: SongListAPIDeleteCommentPathParams = field()
    

@dataclass
class SongListAPIDeleteCommentResponse:
    content_type: str = field()
    status_code: int = field()
    

from dataclasses import dataclass, field



@dataclass
class AlbumAPIDeleteCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AlbumAPIDeleteCommentRequest:
    path_params: AlbumAPIDeleteCommentPathParams = field()
    

@dataclass
class AlbumAPIDeleteCommentResponse:
    content_type: str = field()
    status_code: int = field()
    

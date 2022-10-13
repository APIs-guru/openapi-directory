from dataclasses import dataclass, field



@dataclass
class AlbumAPIDeleteCommentPathParams:
    comment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AlbumAPIDeleteCommentRequest:
    path_params: AlbumAPIDeleteCommentPathParams = field(default=None)
    

@dataclass
class AlbumAPIDeleteCommentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field



@dataclass
class ArtistAPIDeleteCommentPathParams:
    comment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ArtistAPIDeleteCommentRequest:
    path_params: ArtistAPIDeleteCommentPathParams = field(default=None)
    

@dataclass
class ArtistAPIDeleteCommentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

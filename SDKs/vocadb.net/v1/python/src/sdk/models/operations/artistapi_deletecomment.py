from dataclasses import dataclass, field



@dataclass
class ArtistAPIDeleteCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ArtistAPIDeleteCommentRequest:
    path_params: ArtistAPIDeleteCommentPathParams = field()
    

@dataclass
class ArtistAPIDeleteCommentResponse:
    content_type: str = field()
    status_code: int = field()
    

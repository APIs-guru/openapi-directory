from dataclasses import dataclass, field



@dataclass
class TagAPIDeleteCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TagAPIDeleteCommentRequest:
    path_params: TagAPIDeleteCommentPathParams = field()
    

@dataclass
class TagAPIDeleteCommentResponse:
    content_type: str = field()
    status_code: int = field()
    

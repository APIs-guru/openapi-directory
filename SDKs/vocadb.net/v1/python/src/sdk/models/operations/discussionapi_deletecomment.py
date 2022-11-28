from dataclasses import dataclass, field



@dataclass
class DiscussionAPIDeleteCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DiscussionAPIDeleteCommentRequest:
    path_params: DiscussionAPIDeleteCommentPathParams = field()
    

@dataclass
class DiscussionAPIDeleteCommentResponse:
    content_type: str = field()
    status_code: int = field()
    

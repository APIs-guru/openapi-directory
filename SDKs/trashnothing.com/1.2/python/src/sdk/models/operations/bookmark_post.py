from dataclasses import dataclass, field



@dataclass
class BookmarkPostPathParams:
    post_id: str = field(default=None, metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BookmarkPostRequest:
    path_params: BookmarkPostPathParams = field(default=None)
    

@dataclass
class BookmarkPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

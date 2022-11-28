from dataclasses import dataclass, field



@dataclass
class BookmarkPostPathParams:
    post_id: str = field(metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BookmarkPostRequest:
    path_params: BookmarkPostPathParams = field()
    

@dataclass
class BookmarkPostResponse:
    content_type: str = field()
    status_code: int = field()
    

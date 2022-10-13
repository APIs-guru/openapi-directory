from dataclasses import dataclass, field



@dataclass
class AlbumAPIDeleteReviewPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    review_id: int = field(default=None, metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AlbumAPIDeleteReviewRequest:
    path_params: AlbumAPIDeleteReviewPathParams = field(default=None)
    

@dataclass
class AlbumAPIDeleteReviewResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field



@dataclass
class AlbumAPIDeleteReviewPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    review_id: int = field(metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AlbumAPIDeleteReviewRequest:
    path_params: AlbumAPIDeleteReviewPathParams = field()
    

@dataclass
class AlbumAPIDeleteReviewResponse:
    content_type: str = field()
    status_code: int = field()
    

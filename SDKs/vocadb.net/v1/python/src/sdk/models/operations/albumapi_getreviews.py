from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AlbumAPIGetReviewsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AlbumAPIGetReviewsQueryParams:
    language_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'languageCode', 'style': 'form', 'explode': True }})
    

@dataclass
class AlbumAPIGetReviewsRequest:
    path_params: AlbumAPIGetReviewsPathParams = field()
    query_params: AlbumAPIGetReviewsQueryParams = field()
    

@dataclass
class AlbumAPIGetReviewsResponse:
    content_type: str = field()
    status_code: int = field()
    album_review_contracts: Optional[List[shared.AlbumReviewContract]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    

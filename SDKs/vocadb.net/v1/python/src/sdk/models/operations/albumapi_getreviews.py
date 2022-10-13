from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AlbumAPIGetReviewsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AlbumAPIGetReviewsQueryParams:
    language_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'languageCode', 'style': 'form', 'explode': True }})
    

@dataclass
class AlbumAPIGetReviewsRequest:
    path_params: AlbumAPIGetReviewsPathParams = field(default=None)
    query_params: AlbumAPIGetReviewsQueryParams = field(default=None)
    

@dataclass
class AlbumAPIGetReviewsResponse:
    album_review_contracts: Optional[List[shared.AlbumReviewContract]] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

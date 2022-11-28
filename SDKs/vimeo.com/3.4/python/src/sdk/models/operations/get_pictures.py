from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPicturesPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPicturesQueryParams:
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPicturesRequest:
    path_params: GetPicturesPathParams = field()
    query_params: GetPicturesQueryParams = field()
    

@dataclass
class GetPicturesResponse:
    content_type: str = field()
    status_code: int = field()
    pictures: Optional[List[shared.Picture]] = field(default=None)
    

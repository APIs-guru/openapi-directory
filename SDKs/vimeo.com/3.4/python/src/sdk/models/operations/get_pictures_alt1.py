from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPicturesAlt1QueryParams:
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPicturesAlt1Request:
    query_params: GetPicturesAlt1QueryParams = field()
    

@dataclass
class GetPicturesAlt1Response:
    content_type: str = field()
    status_code: int = field()
    pictures: Optional[List[shared.Picture]] = field(default=None)
    

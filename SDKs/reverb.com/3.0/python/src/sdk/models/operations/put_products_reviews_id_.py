from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PutProductsReviewsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutProductsReviewsIDRequestBody:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    rating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class PutProductsReviewsIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutProductsReviewsIDRequest:
    path_params: PutProductsReviewsIDPathParams = field(default=None)
    request: Optional[PutProductsReviewsIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutProductsReviewsIDSecurity = field(default=None)
    

@dataclass
class PutProductsReviewsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

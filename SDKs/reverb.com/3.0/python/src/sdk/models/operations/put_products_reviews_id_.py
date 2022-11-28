from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutProductsReviewsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutProductsReviewsIDRequestBody:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    rating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass
class PutProductsReviewsIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutProductsReviewsIDRequest:
    path_params: PutProductsReviewsIDPathParams = field()
    security: PutProductsReviewsIDSecurity = field()
    request: Optional[PutProductsReviewsIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutProductsReviewsIDResponse:
    content_type: str = field()
    status_code: int = field()
    

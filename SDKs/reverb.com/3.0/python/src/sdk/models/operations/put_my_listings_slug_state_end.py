from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutMyListingsSlugStateEndPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    
class PutMyListingsSlugStateEndRequestBodyReasonEnum(str, Enum):
    NOT_SOLD = "not_sold"
    REVERB_SALE = "reverb_sale"


@dataclass_json
@dataclass
class PutMyListingsSlugStateEndRequestBody:
    reason: PutMyListingsSlugStateEndRequestBodyReasonEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass
class PutMyListingsSlugStateEndSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutMyListingsSlugStateEndRequest:
    path_params: PutMyListingsSlugStateEndPathParams = field()
    security: PutMyListingsSlugStateEndSecurity = field()
    request: Optional[PutMyListingsSlugStateEndRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutMyListingsSlugStateEndResponse:
    content_type: str = field()
    status_code: int = field()
    

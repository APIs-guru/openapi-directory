from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutMyListingsSlugStateEndPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    
class PutMyListingsSlugStateEndRequestBodyReasonEnum(str, Enum):
    NOT_SOLD = "not_sold"
    REVERB_SALE = "reverb_sale"


@dataclass_json
@dataclass
class PutMyListingsSlugStateEndRequestBody:
    reason: PutMyListingsSlugStateEndRequestBodyReasonEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    

@dataclass
class PutMyListingsSlugStateEndSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutMyListingsSlugStateEndRequest:
    path_params: PutMyListingsSlugStateEndPathParams = field(default=None)
    request: Optional[PutMyListingsSlugStateEndRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutMyListingsSlugStateEndSecurity = field(default=None)
    

@dataclass
class PutMyListingsSlugStateEndResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

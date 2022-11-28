from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetFacilityIdsTypeEnum(str, Enum):
    HEALTH = "health"
    CEMETERY = "cemetery"
    BENEFITS = "benefits"
    VET_CENTER = "vet_center"


@dataclass
class GetFacilityIdsQueryParams:
    type: Optional[GetFacilityIdsTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFacilityIdsSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFacilityIdsRequest:
    query_params: GetFacilityIdsQueryParams = field()
    security: GetFacilityIdsSecurity = field()
    

@dataclass
class GetFacilityIdsResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    facilities_ids_response: Optional[shared.FacilitiesIdsResponse] = field(default=None)
    generic_error: Optional[shared.GenericError] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Enum,Optional
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
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFacilityIdsRequest:
    query_params: GetFacilityIdsQueryParams = field(default=None)
    security: GetFacilityIdsSecurity = field(default=None)
    

@dataclass
class GetFacilityIdsResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    facilities_ids_response: Optional[shared.FacilitiesIdsResponse] = field(default=None)
    generic_error: Optional[shared.GenericError] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFacilityByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFacilityByIDSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFacilityByIDRequest:
    path_params: GetFacilityByIDPathParams = field(default=None)
    security: GetFacilityByIDSecurity = field(default=None)
    

@dataclass
class GetFacilityByIDResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    facility_read_response: Optional[shared.FacilityReadResponse] = field(default=None)
    generic_error: Optional[shared.GenericError] = field(default=None)
    geo_facility_read_response: Optional[shared.GeoFacilityReadResponse] = field(default=None)
    status_code: int = field(default=None)
    

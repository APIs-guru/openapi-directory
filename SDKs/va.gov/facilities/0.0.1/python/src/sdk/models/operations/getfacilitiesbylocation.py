from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetFacilitiesByLocationTypeEnum(str, Enum):
    HEALTH = "health"
    CEMETERY = "cemetery"
    BENEFITS = "benefits"
    VET_CENTER = "vet_center"


@dataclass
class GetFacilitiesByLocationQueryParams:
    bbox_: Optional[List[float]] = field(default=None, metadata={'query_param': { 'field_name': 'bbox[]', 'style': 'form', 'explode': True }})
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    lat: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    long: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'long', 'style': 'form', 'explode': True }})
    mobile: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'mobile', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    services_: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'services[]', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    type: Optional[GetFacilitiesByLocationTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    visn: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'visn', 'style': 'form', 'explode': True }})
    zip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFacilitiesByLocationSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFacilitiesByLocationRequest:
    query_params: GetFacilitiesByLocationQueryParams = field()
    security: GetFacilitiesByLocationSecurity = field()
    

@dataclass
class GetFacilitiesByLocationResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    facilities_response: Optional[shared.FacilitiesResponse] = field(default=None)
    generic_error: Optional[shared.GenericError] = field(default=None)
    geo_facilities_response: Optional[shared.GeoFacilitiesResponse] = field(default=None)
    

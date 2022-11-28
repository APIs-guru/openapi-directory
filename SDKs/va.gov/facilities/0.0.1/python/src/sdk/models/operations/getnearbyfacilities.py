from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetNearbyFacilitiesQueryParams:
    city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    drive_time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'drive_time', 'style': 'form', 'explode': True }})
    lat: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    services_: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'services[]', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    street_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'street_address', 'style': 'form', 'explode': True }})
    zip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNearbyFacilitiesSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNearbyFacilitiesRequest:
    query_params: GetNearbyFacilitiesQueryParams = field()
    security: GetNearbyFacilitiesSecurity = field()
    

@dataclass
class GetNearbyFacilitiesResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    generic_error: Optional[shared.GenericError] = field(default=None)
    nearby_response: Optional[shared.NearbyResponse] = field(default=None)
    

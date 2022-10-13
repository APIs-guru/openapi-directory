from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OutletsGetOutletsByGeolocationPathParams:
    latitude: float = field(default=None, metadata={'path_param': { 'field_name': 'latitude', 'style': 'simple', 'explode': False }})
    longitude: float = field(default=None, metadata={'path_param': { 'field_name': 'longitude', 'style': 'simple', 'explode': False }})
    

@dataclass
class OutletsGetOutletsByGeolocationQueryParams:
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    max_distance: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_distance', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max_results', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class OutletsGetOutletsByGeolocationRequest:
    path_params: OutletsGetOutletsByGeolocationPathParams = field(default=None)
    query_params: OutletsGetOutletsByGeolocationQueryParams = field(default=None)
    

@dataclass
class OutletsGetOutletsByGeolocationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    v3_outlet_geolocation_response: Optional[shared.V3OutletGeolocationResponse] = field(default=None)
    

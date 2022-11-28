from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class FareEstimateGetFareEstimateByZonePathParams:
    max_zone: int = field(metadata={'path_param': { 'field_name': 'maxZone', 'style': 'simple', 'explode': False }})
    min_zone: int = field(metadata={'path_param': { 'field_name': 'minZone', 'style': 'simple', 'explode': False }})
    

@dataclass
class FareEstimateGetFareEstimateByZoneQueryParams:
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    is_journey_in_free_tram_zone: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_journey_in_free_tram_zone', 'style': 'form', 'explode': True }})
    journey_touch_off_utc: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'journey_touch_off_utc', 'style': 'form', 'explode': True }})
    journey_touch_on_utc: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'journey_touch_on_utc', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    travelled_route_types: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'travelled_route_types', 'style': 'form', 'explode': True }})
    

@dataclass
class FareEstimateGetFareEstimateByZoneRequest:
    path_params: FareEstimateGetFareEstimateByZonePathParams = field()
    query_params: FareEstimateGetFareEstimateByZoneQueryParams = field()
    

@dataclass
class FareEstimateGetFareEstimateByZoneResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    v3_fare_estimate_response: Optional[Any] = field(default=None)
    

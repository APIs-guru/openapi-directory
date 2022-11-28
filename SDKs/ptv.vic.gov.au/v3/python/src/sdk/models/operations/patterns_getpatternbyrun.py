from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PatternsGetPatternByRunPathParams:
    route_type: int = field(metadata={'path_param': { 'field_name': 'route_type', 'style': 'simple', 'explode': False }})
    run_ref: str = field(metadata={'path_param': { 'field_name': 'run_ref', 'style': 'simple', 'explode': False }})
    
class PatternsGetPatternByRunExpandEnum(str, Enum):
    ALL = "All"
    STOP = "Stop"
    ROUTE = "Route"
    RUN = "Run"
    DIRECTION = "Direction"
    DISRUPTION = "Disruption"
    VEHICLE_DESCRIPTOR = "VehicleDescriptor"
    VEHICLE_POSITION = "VehiclePosition"
    NONE = "None"


@dataclass
class PatternsGetPatternByRunQueryParams:
    expand: List[PatternsGetPatternByRunExpandEnum] = field(metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    date_utc: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_utc', 'style': 'form', 'explode': True }})
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    include_geopath: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_geopath', 'style': 'form', 'explode': True }})
    include_skipped_stops: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_skipped_stops', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    stop_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'stop_id', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class PatternsGetPatternByRunRequest:
    path_params: PatternsGetPatternByRunPathParams = field()
    query_params: PatternsGetPatternByRunQueryParams = field()
    

@dataclass
class PatternsGetPatternByRunResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    v3_stopping_pattern: Optional[shared.V3StoppingPattern] = field(default=None)
    

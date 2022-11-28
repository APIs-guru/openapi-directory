from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class RunsForRouteAndRouteTypePathParams:
    route_id: int = field(metadata={'path_param': { 'field_name': 'route_id', 'style': 'simple', 'explode': False }})
    route_type: int = field(metadata={'path_param': { 'field_name': 'route_type', 'style': 'simple', 'explode': False }})
    
class RunsForRouteAndRouteTypeExpandEnum(str, Enum):
    ALL = "All"
    VEHICLE_DESCRIPTOR = "VehicleDescriptor"
    VEHICLE_POSITION = "VehiclePosition"
    NONE = "None"


@dataclass
class RunsForRouteAndRouteTypeQueryParams:
    expand: List[RunsForRouteAndRouteTypeExpandEnum] = field(metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    date_utc: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_utc', 'style': 'form', 'explode': True }})
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class RunsForRouteAndRouteTypeRequest:
    path_params: RunsForRouteAndRouteTypePathParams = field()
    query_params: RunsForRouteAndRouteTypeQueryParams = field()
    

@dataclass
class RunsForRouteAndRouteTypeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    v3_runs_response: Optional[shared.V3RunsResponse] = field(default=None)
    

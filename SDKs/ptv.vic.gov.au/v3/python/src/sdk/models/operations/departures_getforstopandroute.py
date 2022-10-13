from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class DeparturesGetForStopAndRoutePathParams:
    route_id: str = field(default=None, metadata={'path_param': { 'field_name': 'route_id', 'style': 'simple', 'explode': False }})
    route_type: int = field(default=None, metadata={'path_param': { 'field_name': 'route_type', 'style': 'simple', 'explode': False }})
    stop_id: int = field(default=None, metadata={'path_param': { 'field_name': 'stop_id', 'style': 'simple', 'explode': False }})
    
class DeparturesGetForStopAndRouteExpandEnum(str, Enum):
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
class DeparturesGetForStopAndRouteQueryParams:
    date_utc: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_utc', 'style': 'form', 'explode': True }})
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    direction_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'direction_id', 'style': 'form', 'explode': True }})
    expand: Optional[List[DeparturesGetForStopAndRouteExpandEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    gtfs: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'gtfs', 'style': 'form', 'explode': True }})
    include_cancelled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_cancelled', 'style': 'form', 'explode': True }})
    include_geopath: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_geopath', 'style': 'form', 'explode': True }})
    look_backwards: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'look_backwards', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max_results', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class DeparturesGetForStopAndRouteRequest:
    path_params: DeparturesGetForStopAndRoutePathParams = field(default=None)
    query_params: DeparturesGetForStopAndRouteQueryParams = field(default=None)
    

@dataclass
class DeparturesGetForStopAndRouteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v3_departures_response: Optional[shared.V3DeparturesResponse] = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    

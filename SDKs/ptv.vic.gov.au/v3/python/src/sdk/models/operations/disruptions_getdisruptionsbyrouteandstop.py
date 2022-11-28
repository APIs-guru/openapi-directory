from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DisruptionsGetDisruptionsByRouteAndStopPathParams:
    route_id: int = field(metadata={'path_param': { 'field_name': 'route_id', 'style': 'simple', 'explode': False }})
    stop_id: int = field(metadata={'path_param': { 'field_name': 'stop_id', 'style': 'simple', 'explode': False }})
    
class DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum(str, Enum):
    CURRENT = "current"
    PLANNED = "planned"


@dataclass
class DisruptionsGetDisruptionsByRouteAndStopQueryParams:
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    disruption_status: Optional[DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'disruption_status', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class DisruptionsGetDisruptionsByRouteAndStopRequest:
    path_params: DisruptionsGetDisruptionsByRouteAndStopPathParams = field()
    query_params: DisruptionsGetDisruptionsByRouteAndStopQueryParams = field()
    

@dataclass
class DisruptionsGetDisruptionsByRouteAndStopResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    v3_disruptions_response: Optional[shared.V3DisruptionsResponse] = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    

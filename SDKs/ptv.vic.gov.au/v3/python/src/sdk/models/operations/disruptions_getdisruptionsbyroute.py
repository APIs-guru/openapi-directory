from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DisruptionsGetDisruptionsByRoutePathParams:
    route_id: int = field(metadata={'path_param': { 'field_name': 'route_id', 'style': 'simple', 'explode': False }})
    
class DisruptionsGetDisruptionsByRouteDisruptionStatusEnum(str, Enum):
    CURRENT = "current"
    PLANNED = "planned"


@dataclass
class DisruptionsGetDisruptionsByRouteQueryParams:
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    disruption_status: Optional[DisruptionsGetDisruptionsByRouteDisruptionStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'disruption_status', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class DisruptionsGetDisruptionsByRouteRequest:
    path_params: DisruptionsGetDisruptionsByRoutePathParams = field()
    query_params: DisruptionsGetDisruptionsByRouteQueryParams = field()
    

@dataclass
class DisruptionsGetDisruptionsByRouteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    v3_disruptions_response: Optional[shared.V3DisruptionsResponse] = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    

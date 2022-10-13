from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class StopPointRoutePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class StopPointRouteServiceTypesEnum(str, Enum):
    REGULAR = "Regular"
    NIGHT = "Night"


@dataclass
class StopPointRouteQueryParams:
    service_types: Optional[List[StopPointRouteServiceTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'serviceTypes', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointRouteRequest:
    path_params: StopPointRoutePathParams = field(default=None)
    query_params: StopPointRouteQueryParams = field(default=None)
    

@dataclass
class StopPointRouteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_stop_point_route_sections: Optional[List[shared.TflAPIPresentationEntitiesStopPointRouteSection]] = field(default=None)
    

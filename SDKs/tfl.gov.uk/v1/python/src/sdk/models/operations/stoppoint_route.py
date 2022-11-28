from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StopPointRoutePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class StopPointRouteServiceTypesEnum(str, Enum):
    REGULAR = "Regular"
    NIGHT = "Night"


@dataclass
class StopPointRouteQueryParams:
    service_types: Optional[List[StopPointRouteServiceTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'serviceTypes', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointRouteRequest:
    path_params: StopPointRoutePathParams = field()
    query_params: StopPointRouteQueryParams = field()
    

@dataclass
class StopPointRouteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_stop_point_route_sections: Optional[List[shared.TflAPIPresentationEntitiesStopPointRouteSection]] = field(default=None)
    

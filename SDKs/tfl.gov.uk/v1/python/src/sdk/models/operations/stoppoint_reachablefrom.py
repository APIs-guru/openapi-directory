from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class StopPointReachableFromPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    line_id: str = field(default=None, metadata={'path_param': { 'field_name': 'lineId', 'style': 'simple', 'explode': False }})
    
class StopPointReachableFromServiceTypesEnum(str, Enum):
    REGULAR = "Regular"
    NIGHT = "Night"


@dataclass
class StopPointReachableFromQueryParams:
    service_types: Optional[List[StopPointReachableFromServiceTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'serviceTypes', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointReachableFromRequest:
    path_params: StopPointReachableFromPathParams = field(default=None)
    query_params: StopPointReachableFromQueryParams = field(default=None)
    

@dataclass
class StopPointReachableFromResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_stop_points: Optional[List[shared.TflAPIPresentationEntitiesStopPoint]] = field(default=None)
    

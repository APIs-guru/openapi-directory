from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StopPointReachableFromPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    line_id: str = field(metadata={'path_param': { 'field_name': 'lineId', 'style': 'simple', 'explode': False }})
    
class StopPointReachableFromServiceTypesEnum(str, Enum):
    REGULAR = "Regular"
    NIGHT = "Night"


@dataclass
class StopPointReachableFromQueryParams:
    service_types: Optional[List[StopPointReachableFromServiceTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'serviceTypes', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointReachableFromRequest:
    path_params: StopPointReachableFromPathParams = field()
    query_params: StopPointReachableFromQueryParams = field()
    

@dataclass
class StopPointReachableFromResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_stop_points: Optional[List[shared.TflAPIPresentationEntitiesStopPoint]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StopPointCrowdingPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    line: str = field(metadata={'path_param': { 'field_name': 'line', 'style': 'simple', 'explode': False }})
    
class StopPointCrowdingDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"
    ALL = "all"


@dataclass
class StopPointCrowdingQueryParams:
    direction: StopPointCrowdingDirectionEnum = field(metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointCrowdingRequest:
    path_params: StopPointCrowdingPathParams = field()
    query_params: StopPointCrowdingQueryParams = field()
    

@dataclass
class StopPointCrowdingResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_stop_points: Optional[List[shared.TflAPIPresentationEntitiesStopPoint]] = field(default=None)
    

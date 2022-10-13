from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class StopPointCrowdingPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    line: str = field(default=None, metadata={'path_param': { 'field_name': 'line', 'style': 'simple', 'explode': False }})
    
class StopPointCrowdingDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"
    ALL = "all"


@dataclass
class StopPointCrowdingQueryParams:
    direction: StopPointCrowdingDirectionEnum = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointCrowdingRequest:
    path_params: StopPointCrowdingPathParams = field(default=None)
    query_params: StopPointCrowdingQueryParams = field(default=None)
    

@dataclass
class StopPointCrowdingResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_stop_points: Optional[List[shared.TflAPIPresentationEntitiesStopPoint]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class LineRouteSequenceDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"
    ALL = "all"


@dataclass
class LineRouteSequencePathParams:
    direction: LineRouteSequenceDirectionEnum = field(default=None, metadata={'path_param': { 'field_name': 'direction', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class LineRouteSequenceServiceTypesEnum(str, Enum):
    REGULAR = "Regular"
    NIGHT = "Night"


@dataclass
class LineRouteSequenceQueryParams:
    exclude_crowding: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'excludeCrowding', 'style': 'form', 'explode': True }})
    service_types: Optional[List[LineRouteSequenceServiceTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'serviceTypes', 'style': 'form', 'explode': True }})
    

@dataclass
class LineRouteSequenceRequest:
    path_params: LineRouteSequencePathParams = field(default=None)
    query_params: LineRouteSequenceQueryParams = field(default=None)
    

@dataclass
class LineRouteSequenceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_route_sequence: Optional[shared.TflAPIPresentationEntitiesRouteSequence] = field(default=None)
    

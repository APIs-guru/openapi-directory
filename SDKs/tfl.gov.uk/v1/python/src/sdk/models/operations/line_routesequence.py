from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class LineRouteSequenceDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"
    ALL = "all"


@dataclass
class LineRouteSequencePathParams:
    direction: LineRouteSequenceDirectionEnum = field(metadata={'path_param': { 'field_name': 'direction', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class LineRouteSequenceServiceTypesEnum(str, Enum):
    REGULAR = "Regular"
    NIGHT = "Night"


@dataclass
class LineRouteSequenceQueryParams:
    exclude_crowding: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'excludeCrowding', 'style': 'form', 'explode': True }})
    service_types: Optional[List[LineRouteSequenceServiceTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'serviceTypes', 'style': 'form', 'explode': True }})
    

@dataclass
class LineRouteSequenceRequest:
    path_params: LineRouteSequencePathParams = field()
    query_params: LineRouteSequenceQueryParams = field()
    

@dataclass
class LineRouteSequenceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_route_sequence: Optional[shared.TflAPIPresentationEntitiesRouteSequence] = field(default=None)
    

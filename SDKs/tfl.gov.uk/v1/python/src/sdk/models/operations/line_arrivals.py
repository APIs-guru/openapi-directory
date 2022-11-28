from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class LineArrivalsPathParams:
    ids: List[str] = field(metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    stop_point_id: str = field(metadata={'path_param': { 'field_name': 'stopPointId', 'style': 'simple', 'explode': False }})
    
class LineArrivalsDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"
    ALL = "all"


@dataclass
class LineArrivalsQueryParams:
    destination_station_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'destinationStationId', 'style': 'form', 'explode': True }})
    direction: Optional[LineArrivalsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    

@dataclass
class LineArrivalsRequest:
    path_params: LineArrivalsPathParams = field()
    query_params: LineArrivalsQueryParams = field()
    

@dataclass
class LineArrivalsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_predictions: Optional[List[shared.TflAPIPresentationEntitiesPrediction]] = field(default=None)
    

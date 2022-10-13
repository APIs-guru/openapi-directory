from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopPointArrivalDeparturesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopPointArrivalDeparturesQueryParams:
    line_ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'lineIds', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointArrivalDeparturesRequest:
    path_params: StopPointArrivalDeparturesPathParams = field(default=None)
    query_params: StopPointArrivalDeparturesQueryParams = field(default=None)
    

@dataclass
class StopPointArrivalDeparturesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_arrival_departures: Optional[List[shared.TflAPIPresentationEntitiesArrivalDeparture]] = field(default=None)
    

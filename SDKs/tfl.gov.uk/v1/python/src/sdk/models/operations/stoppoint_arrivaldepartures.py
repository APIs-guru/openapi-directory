from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopPointArrivalDeparturesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopPointArrivalDeparturesQueryParams:
    line_ids: List[str] = field(metadata={'query_param': { 'field_name': 'lineIds', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointArrivalDeparturesRequest:
    path_params: StopPointArrivalDeparturesPathParams = field()
    query_params: StopPointArrivalDeparturesQueryParams = field()
    

@dataclass
class StopPointArrivalDeparturesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_arrival_departures: Optional[List[shared.TflAPIPresentationEntitiesArrivalDeparture]] = field(default=None)
    

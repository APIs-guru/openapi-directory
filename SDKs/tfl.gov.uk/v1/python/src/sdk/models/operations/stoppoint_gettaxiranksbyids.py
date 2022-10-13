from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopPointGetTaxiRanksByIdsPathParams:
    stop_point_id: str = field(default=None, metadata={'path_param': { 'field_name': 'stopPointId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopPointGetTaxiRanksByIdsRequest:
    path_params: StopPointGetTaxiRanksByIdsPathParams = field(default=None)
    

@dataclass
class StopPointGetTaxiRanksByIdsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_places: Optional[List[shared.TflAPIPresentationEntitiesPlace]] = field(default=None)
    

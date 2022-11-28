from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopPointGetTaxiRanksByIdsPathParams:
    stop_point_id: str = field(metadata={'path_param': { 'field_name': 'stopPointId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopPointGetTaxiRanksByIdsRequest:
    path_params: StopPointGetTaxiRanksByIdsPathParams = field()
    

@dataclass
class StopPointGetTaxiRanksByIdsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_places: Optional[List[shared.TflAPIPresentationEntitiesPlace]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RoadDisruptionByIDPathParams:
    disruption_ids: List[str] = field(metadata={'path_param': { 'field_name': 'disruptionIds', 'style': 'simple', 'explode': False }})
    

@dataclass
class RoadDisruptionByIDQueryParams:
    strip_content: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stripContent', 'style': 'form', 'explode': True }})
    

@dataclass
class RoadDisruptionByIDRequest:
    path_params: RoadDisruptionByIDPathParams = field()
    query_params: RoadDisruptionByIDQueryParams = field()
    

@dataclass
class RoadDisruptionByIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_road_disruption: Optional[shared.TflAPIPresentationEntitiesRoadDisruption] = field(default=None)
    

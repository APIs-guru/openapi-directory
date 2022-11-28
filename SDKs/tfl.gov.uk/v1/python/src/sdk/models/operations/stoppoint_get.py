from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopPointGetPathParams:
    ids: List[str] = field(metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopPointGetQueryParams:
    include_crowding_data: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeCrowdingData', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointGetRequest:
    path_params: StopPointGetPathParams = field()
    query_params: StopPointGetQueryParams = field()
    

@dataclass
class StopPointGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_stop_points: Optional[List[shared.TflAPIPresentationEntitiesStopPoint]] = field(default=None)
    

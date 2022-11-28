from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopPointGetByModePathParams:
    modes: List[str] = field(metadata={'path_param': { 'field_name': 'modes', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopPointGetByModeQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointGetByModeRequest:
    path_params: StopPointGetByModePathParams = field()
    query_params: StopPointGetByModeQueryParams = field()
    

@dataclass
class StopPointGetByModeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_stop_points_response: Optional[shared.TflAPIPresentationEntitiesStopPointsResponse] = field(default=None)
    

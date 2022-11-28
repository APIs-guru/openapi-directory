from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopPointGetByTypeWithPaginationPathParams:
    page: int = field(metadata={'path_param': { 'field_name': 'page', 'style': 'simple', 'explode': False }})
    types: List[str] = field(metadata={'path_param': { 'field_name': 'types', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopPointGetByTypeWithPaginationRequest:
    path_params: StopPointGetByTypeWithPaginationPathParams = field()
    

@dataclass
class StopPointGetByTypeWithPaginationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_stop_points: Optional[List[shared.TflAPIPresentationEntitiesStopPoint]] = field(default=None)
    

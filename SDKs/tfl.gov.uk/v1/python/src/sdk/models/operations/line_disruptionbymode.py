from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LineDisruptionByModePathParams:
    modes: List[str] = field(metadata={'path_param': { 'field_name': 'modes', 'style': 'simple', 'explode': False }})
    

@dataclass
class LineDisruptionByModeRequest:
    path_params: LineDisruptionByModePathParams = field()
    

@dataclass
class LineDisruptionByModeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_disruptions: Optional[List[shared.TflAPIPresentationEntitiesDisruption]] = field(default=None)
    

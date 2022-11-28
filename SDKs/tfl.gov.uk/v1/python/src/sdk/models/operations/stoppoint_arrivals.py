from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopPointArrivalsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopPointArrivalsRequest:
    path_params: StopPointArrivalsPathParams = field()
    

@dataclass
class StopPointArrivalsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_predictions: Optional[List[shared.TflAPIPresentationEntitiesPrediction]] = field(default=None)
    

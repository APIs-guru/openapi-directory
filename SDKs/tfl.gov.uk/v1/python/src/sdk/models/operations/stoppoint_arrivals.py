from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopPointArrivalsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopPointArrivalsRequest:
    path_params: StopPointArrivalsPathParams = field(default=None)
    

@dataclass
class StopPointArrivalsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_predictions: Optional[List[shared.TflAPIPresentationEntitiesPrediction]] = field(default=None)
    

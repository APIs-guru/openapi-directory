from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ModeArrivalsPathParams:
    mode: str = field(metadata={'path_param': { 'field_name': 'mode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModeArrivalsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    

@dataclass
class ModeArrivalsRequest:
    path_params: ModeArrivalsPathParams = field()
    query_params: ModeArrivalsQueryParams = field()
    

@dataclass
class ModeArrivalsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_predictions: Optional[List[shared.TflAPIPresentationEntitiesPrediction]] = field(default=None)
    

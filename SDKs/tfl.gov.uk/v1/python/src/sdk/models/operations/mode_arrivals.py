from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ModeArrivalsPathParams:
    mode: str = field(default=None, metadata={'path_param': { 'field_name': 'mode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModeArrivalsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    

@dataclass
class ModeArrivalsRequest:
    path_params: ModeArrivalsPathParams = field(default=None)
    query_params: ModeArrivalsQueryParams = field(default=None)
    

@dataclass
class ModeArrivalsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_predictions: Optional[List[shared.TflAPIPresentationEntitiesPrediction]] = field(default=None)
    

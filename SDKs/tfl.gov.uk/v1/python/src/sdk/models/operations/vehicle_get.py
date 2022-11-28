from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class VehicleGetPathParams:
    ids: List[str] = field(metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    

@dataclass
class VehicleGetRequest:
    path_params: VehicleGetPathParams = field()
    

@dataclass
class VehicleGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_predictions: Optional[List[shared.TflAPIPresentationEntitiesPrediction]] = field(default=None)
    

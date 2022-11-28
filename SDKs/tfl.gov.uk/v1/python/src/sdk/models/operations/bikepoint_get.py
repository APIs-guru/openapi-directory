from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BikePointGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BikePointGetRequest:
    path_params: BikePointGetPathParams = field()
    

@dataclass
class BikePointGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_place: Optional[shared.TflAPIPresentationEntitiesPlace] = field(default=None)
    

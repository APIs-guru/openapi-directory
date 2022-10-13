from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BikePointGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BikePointGetRequest:
    path_params: BikePointGetPathParams = field(default=None)
    

@dataclass
class BikePointGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_place: Optional[shared.TflAPIPresentationEntitiesPlace] = field(default=None)
    

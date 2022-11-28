from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PlaceGetByTypePathParams:
    types: List[str] = field(metadata={'path_param': { 'field_name': 'types', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlaceGetByTypeQueryParams:
    active_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'activeOnly', 'style': 'form', 'explode': True }})
    

@dataclass
class PlaceGetByTypeRequest:
    path_params: PlaceGetByTypePathParams = field()
    query_params: PlaceGetByTypeQueryParams = field()
    

@dataclass
class PlaceGetByTypeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_places: Optional[List[shared.TflAPIPresentationEntitiesPlace]] = field(default=None)
    

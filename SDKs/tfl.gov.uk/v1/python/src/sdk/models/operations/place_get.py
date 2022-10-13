from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PlaceGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlaceGetQueryParams:
    include_children: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeChildren', 'style': 'form', 'explode': True }})
    

@dataclass
class PlaceGetRequest:
    path_params: PlaceGetPathParams = field(default=None)
    query_params: PlaceGetQueryParams = field(default=None)
    

@dataclass
class PlaceGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_places: Optional[List[shared.TflAPIPresentationEntitiesPlace]] = field(default=None)
    

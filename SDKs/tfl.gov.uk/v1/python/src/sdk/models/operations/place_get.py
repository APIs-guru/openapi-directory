from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PlaceGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlaceGetQueryParams:
    include_children: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeChildren', 'style': 'form', 'explode': True }})
    

@dataclass
class PlaceGetRequest:
    path_params: PlaceGetPathParams = field()
    query_params: PlaceGetQueryParams = field()
    

@dataclass
class PlaceGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_places: Optional[List[shared.TflAPIPresentationEntitiesPlace]] = field(default=None)
    

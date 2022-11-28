from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PlaceSearchQueryParams:
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'types', 'style': 'form', 'explode': True }})
    

@dataclass
class PlaceSearchRequest:
    query_params: PlaceSearchQueryParams = field()
    

@dataclass
class PlaceSearchResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_places: Optional[List[shared.TflAPIPresentationEntitiesPlace]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class BikePointSearchQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class BikePointSearchRequest:
    query_params: BikePointSearchQueryParams = field()
    

@dataclass
class BikePointSearchResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_places: Optional[List[shared.TflAPIPresentationEntitiesPlace]] = field(default=None)
    

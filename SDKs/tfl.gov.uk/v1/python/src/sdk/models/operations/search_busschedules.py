from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchBusSchedulesQueryParams:
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchBusSchedulesRequest:
    query_params: SearchBusSchedulesQueryParams = field(default=None)
    

@dataclass
class SearchBusSchedulesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_search_response: Optional[shared.TflAPIPresentationEntitiesSearchResponse] = field(default=None)
    

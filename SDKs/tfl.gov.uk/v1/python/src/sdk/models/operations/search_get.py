from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchGetQueryParams:
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchGetRequest:
    query_params: SearchGetQueryParams = field(default=None)
    

@dataclass
class SearchGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_search_response: Optional[shared.TflAPIPresentationEntitiesSearchResponse] = field(default=None)
    

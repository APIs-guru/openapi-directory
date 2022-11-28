from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchGetQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchGetRequest:
    query_params: SearchGetQueryParams = field()
    

@dataclass
class SearchGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_search_response: Optional[shared.TflAPIPresentationEntitiesSearchResponse] = field(default=None)
    

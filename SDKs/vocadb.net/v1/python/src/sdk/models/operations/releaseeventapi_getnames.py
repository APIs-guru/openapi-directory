from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ReleaseEventAPIGetNamesQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class ReleaseEventAPIGetNamesRequest:
    query_params: ReleaseEventAPIGetNamesQueryParams = field()
    

@dataclass
class ReleaseEventAPIGetNamesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    release_event_api_get_names_200_application_json_strings: Optional[List[str]] = field(default=None)
    release_event_api_get_names_200_application_jsonp_strings: Optional[List[str]] = field(default=None)
    release_event_api_get_names_200_text_json_strings: Optional[List[str]] = field(default=None)
    

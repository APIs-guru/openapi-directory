from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class TagAPIGetNamesQueryParams:
    allow_aliases: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allowAliases', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class TagAPIGetNamesRequest:
    query_params: TagAPIGetNamesQueryParams = field(default=None)
    

@dataclass
class TagAPIGetNamesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag_api_get_names_200_application_json_strings: Optional[List[str]] = field(default=None)
    tag_api_get_names_200_application_jsonp_strings: Optional[List[str]] = field(default=None)
    tag_api_get_names_200_text_json_strings: Optional[List[str]] = field(default=None)
    

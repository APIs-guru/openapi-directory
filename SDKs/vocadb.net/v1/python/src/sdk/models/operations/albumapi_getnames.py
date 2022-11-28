from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum

class AlbumAPIGetNamesNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"


@dataclass
class AlbumAPIGetNamesQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[AlbumAPIGetNamesNameMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class AlbumAPIGetNamesRequest:
    query_params: AlbumAPIGetNamesQueryParams = field()
    

@dataclass
class AlbumAPIGetNamesResponse:
    content_type: str = field()
    status_code: int = field()
    album_api_get_names_200_application_json_strings: Optional[List[str]] = field(default=None)
    album_api_get_names_200_application_jsonp_strings: Optional[List[str]] = field(default=None)
    album_api_get_names_200_text_json_strings: Optional[List[str]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional

class SongAPIGetNamesNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"


@dataclass
class SongAPIGetNamesQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[SongAPIGetNamesNameMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class SongAPIGetNamesRequest:
    query_params: SongAPIGetNamesQueryParams = field(default=None)
    

@dataclass
class SongAPIGetNamesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    song_api_get_names_200_application_json_strings: Optional[List[str]] = field(default=None)
    song_api_get_names_200_application_jsonp_strings: Optional[List[str]] = field(default=None)
    song_api_get_names_200_text_json_strings: Optional[List[str]] = field(default=None)
    status_code: int = field(default=None)
    

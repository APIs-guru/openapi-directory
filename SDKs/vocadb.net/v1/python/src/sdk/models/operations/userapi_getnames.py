from dataclasses import dataclass, field
from typing import Enum,List,Optional

class UserAPIGetNamesNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"


@dataclass
class UserAPIGetNamesQueryParams:
    include_disabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeDisabled', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[UserAPIGetNamesNameMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class UserAPIGetNamesRequest:
    query_params: UserAPIGetNamesQueryParams = field(default=None)
    

@dataclass
class UserAPIGetNamesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_api_get_names_200_application_json_strings: Optional[List[str]] = field(default=None)
    user_api_get_names_200_application_jsonp_strings: Optional[List[str]] = field(default=None)
    user_api_get_names_200_text_json_strings: Optional[List[str]] = field(default=None)
    

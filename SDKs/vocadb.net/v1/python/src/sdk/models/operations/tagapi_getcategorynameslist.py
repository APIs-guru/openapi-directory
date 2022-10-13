from dataclasses import dataclass, field
from typing import Enum,List,Optional

class TagAPIGetCategoryNamesListNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"


@dataclass
class TagAPIGetCategoryNamesListQueryParams:
    name_match_mode: Optional[TagAPIGetCategoryNamesListNameMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class TagAPIGetCategoryNamesListRequest:
    query_params: TagAPIGetCategoryNamesListQueryParams = field(default=None)
    

@dataclass
class TagAPIGetCategoryNamesListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag_api_get_category_names_list_200_application_json_strings: Optional[List[str]] = field(default=None)
    tag_api_get_category_names_list_200_application_jsonp_strings: Optional[List[str]] = field(default=None)
    tag_api_get_category_names_list_200_text_json_strings: Optional[List[str]] = field(default=None)
    

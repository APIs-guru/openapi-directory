from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum

class SongListAPIGetFeaturedListNamesFeaturedCategoryEnum(str, Enum):
    NOTHING = "Nothing"
    CONCERTS = "Concerts"
    VOCALOID_RANKING = "VocaloidRanking"
    POOLS = "Pools"
    OTHER = "Other"

class SongListAPIGetFeaturedListNamesNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"


@dataclass
class SongListAPIGetFeaturedListNamesQueryParams:
    featured_category: Optional[SongListAPIGetFeaturedListNamesFeaturedCategoryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'featuredCategory', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[SongListAPIGetFeaturedListNamesNameMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class SongListAPIGetFeaturedListNamesRequest:
    query_params: SongListAPIGetFeaturedListNamesQueryParams = field()
    

@dataclass
class SongListAPIGetFeaturedListNamesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    song_list_api_get_featured_list_names_200_application_json_strings: Optional[List[str]] = field(default=None)
    song_list_api_get_featured_list_names_200_application_jsonp_strings: Optional[List[str]] = field(default=None)
    song_list_api_get_featured_list_names_200_text_json_strings: Optional[List[str]] = field(default=None)
    

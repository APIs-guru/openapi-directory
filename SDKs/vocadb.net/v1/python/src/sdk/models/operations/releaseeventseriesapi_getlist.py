from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class ReleaseEventSeriesAPIGetListFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    DESCRIPTION = "Description"
    EVENTS = "Events"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    WEB_LINKS = "WebLinks"

class ReleaseEventSeriesAPIGetListLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class ReleaseEventSeriesAPIGetListNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"


@dataclass
class ReleaseEventSeriesAPIGetListQueryParams:
    fields: Optional[ReleaseEventSeriesAPIGetListFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    lang: Optional[ReleaseEventSeriesAPIGetListLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[ReleaseEventSeriesAPIGetListNameMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class ReleaseEventSeriesAPIGetListRequest:
    query_params: ReleaseEventSeriesAPIGetListQueryParams = field(default=None)
    

@dataclass
class ReleaseEventSeriesAPIGetListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    partial_find_result_release_event_series_for_api_contract_: Optional[shared.PartialFindResultReleaseEventSeriesForAPIContract] = field(default=None)
    status_code: int = field(default=None)
    

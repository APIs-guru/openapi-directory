from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class VenueAPIGetListDistanceUnitEnum(str, Enum):
    KILOMETERS = "Kilometers"
    MILES = "Miles"

class VenueAPIGetListFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    DESCRIPTION = "Description"
    EVENTS = "Events"
    NAMES = "Names"
    WEB_LINKS = "WebLinks"

class VenueAPIGetListLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class VenueAPIGetListNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class VenueAPIGetListSortRuleEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    DISTANCE = "Distance"


@dataclass
class VenueAPIGetListQueryParams:
    distance_unit: Optional[VenueAPIGetListDistanceUnitEnum] = field(default=None, metadata={'query_param': { 'field_name': 'distanceUnit', 'style': 'form', 'explode': True }})
    fields: Optional[VenueAPIGetListFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    lang: Optional[VenueAPIGetListLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    latitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    longitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[VenueAPIGetListNameMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    radius: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    sort_rule: Optional[VenueAPIGetListSortRuleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortRule', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class VenueAPIGetListRequest:
    query_params: VenueAPIGetListQueryParams = field()
    

@dataclass
class VenueAPIGetListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    partial_find_result_venue_for_api_contract_: Optional[shared.PartialFindResultVenueForAPIContract] = field(default=None)
    

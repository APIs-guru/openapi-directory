from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetVodPurchasesDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVodPurchasesFilterEnum(str, Enum):
    ALL = "all"
    EXPIRING_SOON = "expiring_soon"
    FILM = "film"
    IMPORTANT = "important"
    PURCHASED = "purchased"
    RENTED = "rented"
    SERIES = "series"
    SUBSCRIPTION = "subscription"
    UNWATCHED = "unwatched"
    WATCHED = "watched"

class GetVodPurchasesSortEnum(str, Enum):
    ADDED = "added"
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    NAME = "name"
    PURCHASE_TIME = "purchase_time"
    RATING = "rating"
    RELEASE_DATE = "release_date"


@dataclass
class GetVodPurchasesQueryParams:
    direction: Optional[GetVodPurchasesDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetVodPurchasesFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetVodPurchasesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVodPurchasesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetVodPurchasesRequest:
    query_params: GetVodPurchasesQueryParams = field(default=None)
    security: GetVodPurchasesSecurity = field(default=None)
    

@dataclass
class GetVodPurchasesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_pages: Optional[List[shared.OnDemandPage]] = field(default=None)
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetVodSeasonsPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    
class GetVodSeasonsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVodSeasonsFilterEnum(str, Enum):
    VIEWABLE = "viewable"

class GetVodSeasonsSortEnum(str, Enum):
    DATE = "date"
    MANUAL = "manual"


@dataclass
class GetVodSeasonsQueryParams:
    direction: Optional[GetVodSeasonsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetVodSeasonsFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetVodSeasonsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVodSeasonsRequest:
    path_params: GetVodSeasonsPathParams = field()
    query_params: GetVodSeasonsQueryParams = field()
    

@dataclass
class GetVodSeasonsResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_seasons: Optional[List[shared.OnDemandSeason]] = field(default=None)
    

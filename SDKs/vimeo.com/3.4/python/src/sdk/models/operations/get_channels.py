from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetChannelsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetChannelsFilterEnum(str, Enum):
    FEATURED = "featured"

class GetChannelsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    FOLLOWERS = "followers"
    RELEVANT = "relevant"
    VIDEOS = "videos"


@dataclass
class GetChannelsQueryParams:
    direction: Optional[GetChannelsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetChannelsFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetChannelsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChannelsRequest:
    query_params: GetChannelsQueryParams = field()
    

@dataclass
class GetChannelsResponse:
    content_type: str = field()
    status_code: int = field()
    channels: Optional[List[shared.Channel]] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

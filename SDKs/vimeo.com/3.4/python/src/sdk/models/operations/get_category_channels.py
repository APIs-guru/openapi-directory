from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetCategoryChannelsPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    
class GetCategoryChannelsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetCategoryChannelsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    FOLLOWERS = "followers"
    VIDEOS = "videos"


@dataclass
class GetCategoryChannelsQueryParams:
    direction: Optional[GetCategoryChannelsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetCategoryChannelsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCategoryChannelsRequest:
    path_params: GetCategoryChannelsPathParams = field()
    query_params: GetCategoryChannelsQueryParams = field()
    

@dataclass
class GetCategoryChannelsResponse:
    content_type: str = field()
    status_code: int = field()
    channels: Optional[List[shared.Channel]] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetVodLikesPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    
class GetVodLikesDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVodLikesFilterEnum(str, Enum):
    EXTRA = "extra"
    MAIN = "main"
    TRAILER = "trailer"

class GetVodLikesSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclass
class GetVodLikesQueryParams:
    direction: Optional[GetVodLikesDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetVodLikesFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetVodLikesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVodLikesRequest:
    path_params: GetVodLikesPathParams = field()
    query_params: GetVodLikesQueryParams = field()
    

@dataclass
class GetVodLikesResponse:
    content_type: str = field()
    status_code: int = field()
    users: Optional[List[shared.User]] = field(default=None)
    

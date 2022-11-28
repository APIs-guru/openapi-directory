from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetVideoCreditsPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class GetVideoCreditsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVideoCreditsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclass
class GetVideoCreditsQueryParams:
    direction: Optional[GetVideoCreditsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetVideoCreditsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideoCreditsRequest:
    path_params: GetVideoCreditsPathParams = field()
    query_params: GetVideoCreditsQueryParams = field()
    

@dataclass
class GetVideoCreditsResponse:
    content_type: str = field()
    status_code: int = field()
    credits: Optional[List[shared.Credit]] = field(default=None)
    

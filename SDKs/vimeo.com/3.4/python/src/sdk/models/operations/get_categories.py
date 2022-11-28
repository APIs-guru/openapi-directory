from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetCategoriesDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetCategoriesSortEnum(str, Enum):
    LAST_VIDEO_FEATURED_TIME = "last_video_featured_time"
    NAME = "name"


@dataclass
class GetCategoriesQueryParams:
    direction: Optional[GetCategoriesDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetCategoriesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCategoriesRequest:
    query_params: GetCategoriesQueryParams = field()
    

@dataclass
class GetCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    categories: Optional[List[shared.Category]] = field(default=None)
    

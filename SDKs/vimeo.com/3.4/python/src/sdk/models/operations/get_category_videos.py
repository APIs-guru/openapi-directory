from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetCategoryVideosPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    
class GetCategoryVideosDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetCategoryVideosFilterEnum(str, Enum):
    CONDITIONAL_FEATURED = "conditional_featured"
    EMBEDDABLE = "embeddable"

class GetCategoryVideosSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    COMMENTS = "comments"
    DATE = "date"
    DURATION = "duration"
    FEATURED = "featured"
    LIKES = "likes"
    PLAYS = "plays"
    RELEVANT = "relevant"


@dataclass
class GetCategoryVideosQueryParams:
    direction: Optional[GetCategoryVideosDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetCategoryVideosFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_embeddable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filter_embeddable', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetCategoryVideosSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCategoryVideosRequest:
    path_params: GetCategoryVideosPathParams = field()
    query_params: GetCategoryVideosQueryParams = field()
    

@dataclass
class GetCategoryVideosResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    videos: Optional[List[shared.Video]] = field(default=None)
    

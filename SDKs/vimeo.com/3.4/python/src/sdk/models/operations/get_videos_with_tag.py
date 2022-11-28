from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetVideosWithTagPathParams:
    word: str = field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetVideosWithTagDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVideosWithTagSortEnum(str, Enum):
    CREATED_TIME = "created_time"
    DURATION = "duration"
    NAME = "name"


@dataclass
class GetVideosWithTagQueryParams:
    direction: Optional[GetVideosWithTagDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetVideosWithTagSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideosWithTagRequest:
    path_params: GetVideosWithTagPathParams = field()
    query_params: GetVideosWithTagQueryParams = field()
    

@dataclass
class GetVideosWithTagResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    videos: Optional[List[shared.Video]] = field(default=None)
    

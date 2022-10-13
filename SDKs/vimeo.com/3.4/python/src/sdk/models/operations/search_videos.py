from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class SearchVideosDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class SearchVideosFilterEnum(str, Enum):
    CC = "CC"
    CC_BY = "CC-BY"
    CC_BY_NC = "CC-BY-NC"
    CC_BY_NC_ND = "CC-BY-NC-ND"
    CC_BY_NC_SA = "CC-BY-NC-SA"
    CC_BY_ND = "CC-BY-ND"
    CC_BY_SA = "CC-BY-SA"
    CC0 = "CC0"
    CATEGORIES = "categories"
    DURATION = "duration"
    IN_PROGRESS = "in-progress"
    MINIMUM_LIKES = "minimum_likes"
    TRENDING = "trending"
    UPLOAD_DATE = "upload_date"

class SearchVideosSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    COMMENTS = "comments"
    DATE = "date"
    DURATION = "duration"
    LIKES = "likes"
    PLAYS = "plays"
    RELEVANT = "relevant"


@dataclass
class SearchVideosQueryParams:
    direction: Optional[SearchVideosDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[SearchVideosFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    links: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'links', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[SearchVideosSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    uris: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchVideosRequest:
    query_params: SearchVideosQueryParams = field(default=None)
    

@dataclass
class SearchVideosResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    videos: Optional[List[shared.Video]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetPortfolioVideosAlt1PathParams:
    portfolio_id: float = field(default=None, metadata={'path_param': { 'field_name': 'portfolio_id', 'style': 'simple', 'explode': False }})
    
class GetPortfolioVideosAlt1FilterEnum(str, Enum):
    EMBEDDABLE = "embeddable"

class GetPortfolioVideosAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    COMMENTS = "comments"
    DATE = "date"
    DEFAULT = "default"
    LIKES = "likes"
    MANUAL = "manual"
    PLAYS = "plays"


@dataclass
class GetPortfolioVideosAlt1QueryParams:
    containing_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'containing_uri', 'style': 'form', 'explode': True }})
    filter: Optional[GetPortfolioVideosAlt1FilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_embeddable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filter_embeddable', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetPortfolioVideosAlt1SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPortfolioVideosAlt1Request:
    path_params: GetPortfolioVideosAlt1PathParams = field(default=None)
    query_params: GetPortfolioVideosAlt1QueryParams = field(default=None)
    

@dataclass
class GetPortfolioVideosAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    videos: Optional[List[shared.Video]] = field(default=None)
    

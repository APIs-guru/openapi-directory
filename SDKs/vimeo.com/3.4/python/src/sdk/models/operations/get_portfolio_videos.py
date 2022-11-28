from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetPortfolioVideosPathParams:
    portfolio_id: float = field(metadata={'path_param': { 'field_name': 'portfolio_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetPortfolioVideosFilterEnum(str, Enum):
    EMBEDDABLE = "embeddable"

class GetPortfolioVideosSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    COMMENTS = "comments"
    DATE = "date"
    DEFAULT = "default"
    LIKES = "likes"
    MANUAL = "manual"
    PLAYS = "plays"


@dataclass
class GetPortfolioVideosQueryParams:
    containing_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'containing_uri', 'style': 'form', 'explode': True }})
    filter: Optional[GetPortfolioVideosFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_embeddable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filter_embeddable', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetPortfolioVideosSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPortfolioVideosRequest:
    path_params: GetPortfolioVideosPathParams = field()
    query_params: GetPortfolioVideosQueryParams = field()
    

@dataclass
class GetPortfolioVideosResponse:
    content_type: str = field()
    status_code: int = field()
    videos: Optional[List[shared.Video]] = field(default=None)
    

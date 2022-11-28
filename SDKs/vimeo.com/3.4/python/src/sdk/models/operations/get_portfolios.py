from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetPortfoliosPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetPortfoliosDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetPortfoliosSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclass
class GetPortfoliosQueryParams:
    direction: Optional[GetPortfoliosDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetPortfoliosSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPortfoliosRequest:
    path_params: GetPortfoliosPathParams = field()
    query_params: GetPortfoliosQueryParams = field()
    

@dataclass
class GetPortfoliosResponse:
    content_type: str = field()
    status_code: int = field()
    portfolios: Optional[List[shared.Portfolio]] = field(default=None)
    

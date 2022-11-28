from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetPortfoliosAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetPortfoliosAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclass
class GetPortfoliosAlt1QueryParams:
    direction: Optional[GetPortfoliosAlt1DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetPortfoliosAlt1SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPortfoliosAlt1Request:
    query_params: GetPortfoliosAlt1QueryParams = field()
    

@dataclass
class GetPortfoliosAlt1Response:
    content_type: str = field()
    status_code: int = field()
    portfolios: Optional[List[shared.Portfolio]] = field(default=None)
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetUsersIDTrendAnalysisPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetUsersIDTrendAnalysisPeriodEnum(str, Enum):
    WEEKS = "weeks"
    MONTHS = "months"
    YEARS = "years"
    EVENT = "event"


@dataclass
class GetUsersIDTrendAnalysisQueryParams:
    categories: str = field(metadata={'query_param': { 'field_name': 'categories', 'style': 'form', 'explode': True }})
    end_date: str = field(metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    interval: int = field(metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    period: GetUsersIDTrendAnalysisPeriodEnum = field(metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    scenarios: str = field(metadata={'query_param': { 'field_name': 'scenarios', 'style': 'form', 'explode': True }})
    start_date: str = field(metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersIDTrendAnalysisRequest:
    path_params: GetUsersIDTrendAnalysisPathParams = field()
    query_params: GetUsersIDTrendAnalysisQueryParams = field()
    

@dataclass
class GetUsersIDTrendAnalysisResponse:
    content_type: str = field()
    status_code: int = field()
    budget_analysis_packages: Optional[List[shared.BudgetAnalysisPackage]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetUsersIDTrendAnalysisPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetUsersIDTrendAnalysisPeriodEnum(str, Enum):
    WEEKS = "weeks"
    MONTHS = "months"
    YEARS = "years"
    EVENT = "event"


@dataclass
class GetUsersIDTrendAnalysisQueryParams:
    categories: str = field(default=None, metadata={'query_param': { 'field_name': 'categories', 'style': 'form', 'explode': True }})
    end_date: str = field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    interval: int = field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    period: GetUsersIDTrendAnalysisPeriodEnum = field(default=None, metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    scenarios: str = field(default=None, metadata={'query_param': { 'field_name': 'scenarios', 'style': 'form', 'explode': True }})
    start_date: str = field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersIDTrendAnalysisRequest:
    path_params: GetUsersIDTrendAnalysisPathParams = field(default=None)
    query_params: GetUsersIDTrendAnalysisQueryParams = field(default=None)
    

@dataclass
class GetUsersIDTrendAnalysisResponse:
    budget_analysis_packages: Optional[List[shared.BudgetAnalysisPackage]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
